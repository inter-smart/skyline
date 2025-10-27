import parse from "html-react-parser";

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

  return items.map((item, i) => <li key={i} className={className} dangerouslySetInnerHTML={{ __html: item }} />);
};
