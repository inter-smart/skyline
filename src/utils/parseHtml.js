import parse, { domToReact } from "html-react-parser";
import React from "react";

export function renderHtml(htmlString, containerClass = "") {
  if (!htmlString) return null;
  return <div className={containerClass}>{parse(htmlString)}</div>;
}

export const parseDescriptionToListItems = (htmlString, className) => {
  if (!htmlString) return [];

  // ✅ Replace HTML entities like &amp; &nbsp;
  let decoded = htmlString.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");

  let items = [];

  // ✅ Safe browser check
  if (typeof document !== "undefined") {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = decoded.trim();

    // ✅ Case 1: UL/LI format
    const liTags = tempDiv.querySelectorAll("li");
    if (liTags.length > 0) {
      items = Array.from(liTags).map((li) => li.innerHTML.trim());
    } else {
      // ✅ Case 2: <p> with <br>
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  } else {
    // ✅ Server-side fallback (regex only)
    const liMatches = decoded.match(/<li[^>]*>(.*?)<\/li>/gs);
    if (liMatches?.length) {
      items = liMatches.map((li) => li.replace(/<\/?li[^>]*>/g, "").trim());
    } else {
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  }

  return items.map((item, i) => <li key={i} className={className} style={{ marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: item }} />);
};

export function renderHtmlWithClassName(htmlString, colorClass = "text-white") {
  if (!htmlString) return null;

  // ✅ List of HTML void/self-closing elements
  const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

  const options = {
    replace: (domNode) => {
      if (domNode.type === "tag") {
        const attribs = { ...(domNode.attribs || {}) };

        // 🧹 Remove inline color styles
        if (attribs.style) {
          attribs.style = attribs.style
            .split(";")
            .map((s) => s.trim())
            .filter((s) => s && !/^color\s*:/i.test(s))
            .join(";");
          if (!attribs.style) delete attribs.style;
        }

        // 🎨 Merge with color class
        const existingClass = attribs.class || attribs.className || "";
        attribs.className = `${existingClass} ${colorClass}`.trim();

        // ⚡ Handle void tags — they cannot have children
        if (voidElements.has(domNode.name)) {
          return React.createElement(domNode.name, attribs);
        }

        // ✅ Normal elements: recursively parse children
        return React.createElement(domNode.name, attribs, domToReact(domNode.children, options));
      }
      return undefined;
    },
  };

  // 🧩 Apply a global Tailwind fallback to ensure all descendants stay white
  return <div className={`[&_*]:${colorClass}`}>{parse(htmlString, options)}</div>;
}

export const parseDescriptionToListItemsWithColor = (htmlString, colorClass = "text-white") => {
  if (!htmlString) return [];

  // ✅ Decode common HTML entities
  let decoded = htmlString.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");

  let items = [];

  // ✅ Safe browser-side parsing
  if (typeof document !== "undefined") {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = decoded.trim();

    // ✅ Case 1: UL/LI format
    const liTags = tempDiv.querySelectorAll("li");
    if (liTags.length > 0) {
      items = Array.from(liTags).map((li) => {
        // 🔹 Remove inline color styles recursively
        li.querySelectorAll("*").forEach((el) => {
          if (el.style && el.style.color) el.style.color = "";
        });

        // 🔹 Add text color class to every nested element
        li.querySelectorAll("*").forEach((el) => {
          el.classList.add(...colorClass.split(" "));
        });

        return li.innerHTML.trim();
      });
    } else {
      // ✅ Case 2: Plain <p> with <br> or \n
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  } else {
    // ✅ Server-side fallback using regex
    const liMatches = decoded.match(/<li[^>]*>(.*?)<\/li>/gs);
    if (liMatches?.length) {
      items = liMatches.map((li) =>
        li
          .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "") // remove inline color
          .replace(/<\/?li[^>]*>/g, "")
          .trim()
      );
    } else {
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  }

  // ✅ Return React list items with uniform text color
  return items.map((item, i) => <li key={i} className={`${colorClass}`} dangerouslySetInnerHTML={{ __html: item }} />);
};
