import parse, { domToReact } from "html-react-parser";
import React from "react";

export function renderHtml(htmlString, containerClass = "", styleVar = null) {
  if (!htmlString) return null;

  return (
    <div className={containerClass} style={styleVar ? { "--bg-color": styleVar } : undefined}>
      {parse(htmlString)}
    </div>
  );
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

  return items.map((item, i) => <li key={i} className={className} dangerouslySetInnerHTML={{ __html: item }} />);
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

export function renderTableWithCustomHeader(htmlString, options = {}) {
  if (!htmlString) return null;

  const { headerBgColor = "#eef6ff", headerTextColor = "#00335B", bodyBgColor = "#ffffff", headerOpacity = 1 } = options;

  let rowIndex = 0; // Track which row we're processing

  const tableOptions = {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "table") {
        const attribs = { ...(domNode.attribs || {}) };
        delete attribs.style;

        // Override table classes to match your design
        attribs.className = "w-full min-w-[700px] sm:min-w-full border-collapse";

        return React.createElement("table", attribs, domToReact(domNode.children, tableOptions));
      }

      // Style thead > tr
      if (domNode.type === "tag" && domNode.name === "thead") {
        return React.createElement(
          "thead",
          {},
          domToReact(domNode.children, {
            replace: (childNode) => {
              if (childNode.type === "tag" && childNode.name === "tr") {
                return React.createElement(
                  "tr",
                  {
                    style: {
                      backgroundColor: "black",
                      "--th-color": headerTextColor,
                    },
                    className: "text-left",
                  },
                  domToReact(childNode.children, tableOptions)
                );
              }
            },
          })
        );
      }

      // Style th elements
      if (domNode.type === "tag" && domNode.name === "th") {
        const attribs = { ...(domNode.attribs || {}) };
        // Remove style attribute to avoid string/object conflicts
        delete attribs.style;
        attribs.className =
          "text_editor p-[10px_20px] sm:p-[15px_25px] lg:p-[20px_30px] 2xl:p-[25px_35px] 3xl:p-[30px_40px] [&>_h5]:m-0 [&>_h6]:m-0 first:rounded-[5px_0_0_5px] last:rounded-[0_5px_5px_0] !text-[var(--th-color)] [&_*]:!text-[var(--th-color)] [&_*]:!fill-[var(--th-color)]";

        return React.createElement("th", attribs, domToReact(domNode.children, tableOptions));
      }

      // Style tbody
      if (domNode.type === "tag" && domNode.name === "tbody") {
        const attribs = { ...(domNode.attribs || {}) };
        attribs.style = { backgroundColor: bodyBgColor };

        return React.createElement("tbody", attribs, domToReact(domNode.children, tableOptions));
      }

      // Style tbody > tr
      if (domNode.type === "tag" && domNode.name === "tr" && domNode.parent?.name === "tbody") {
        const attribs = { ...(domNode.attribs || {}) };
        const currentRow = rowIndex;
        rowIndex++; // Increment for next row

        // Apply custom background color and opacity only to the first row
        if (currentRow === 0) {
          const bgColorWithOpacity =
            headerOpacity < 1
              ? `${headerBgColor}${Math.round(headerOpacity * 255)
                  .toString(16)
                  .padStart(2, "0")}`
              : headerBgColor;

          attribs.style = {
            backgroundColor: bgColorWithOpacity,
            "--th-color": headerTextColor,
          };
          attribs.className = "border-b border-[#191919]/30 hover:bg-[#D3D3D3]/20 transition-all duration-300 ease-in-out text-left";
          attribs["data-first-row"] = "true"; // Mark first row for td styling
        } else {
          // Remove style attribute for subsequent rows
          delete attribs.style;
          attribs.className = "border-b border-[#191919]/30 hover:bg-[#D3D3D3]/20 transition-all duration-300 ease-in-out";
        }

        return React.createElement("tr", attribs, domToReact(domNode.children, tableOptions));
      }

      // Style td elements
      if (domNode.type === "tag" && domNode.name === "td") {
        const attribs = { ...(domNode.attribs || {}) };
        // Remove style attribute to avoid string/object conflicts
        delete attribs.style;

        // Check if this td is in the first row
        const isInFirstRow = domNode.parent?.attribs?.["data-first-row"] === "true";

        if (isInFirstRow) {
          // Apply header text color styling to first row cells
          attribs.className =
            "text_editor p-[10px_20px] sm:p-[15px_25px] lg:p-[20px_30px] 2xl:p-[25px_35px] 3xl:p-[30px_40px] [&>_h5]:m-0 [&>_h6]:m-0 [&>p:last-of-type]:mb-0 [&_b]:font-medium mb-0 !text-[var(--th-color)] [&_*]:!text-[var(--th-color)] [&_*]:!fill-[var(--th-color)]";
        } else {
          // Normal td styling for other rows
          attribs.className =
            "text_editor p-[15px_20px] sm:p-[20px_25px] lg:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[35px_40px] [&>p:last-of-type]:mb-0 [&>_p]:leading-[1.8] [&>_p]:text-[#212121] [&>_h6]:m-0 [&_b]:font-medium mb-0";
        }

        return React.createElement("td", attribs, domToReact(domNode.children, tableOptions));
      }

      return undefined;
    },
  };

  return (
    <div className="w-full overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      {parse(htmlString, tableOptions)}
    </div>
  );
}
