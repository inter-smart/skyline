import parse from "html-react-parser";

export function renderHtml(htmlString, containerClass = "") {
  if (!htmlString) return null;

  return <div className={containerClass}>{parse(htmlString)}</div>;
}

export const parseDescriptionToListItems = (htmlString) => {
  if (!htmlString) return [];

  // ✅ Replace HTML entities like &amp; &nbsp;
  let decoded = htmlString.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = decoded.trim();

  let items = [];

  // ✅ Case 1: UL/LI format
  const liTags = tempDiv.querySelectorAll("li");
  if (liTags.length > 0) {
    items = Array.from(liTags).map((li) => li.innerHTML.trim());
  } else {
    // ✅ Case 2: <p> with <br>
    const html = decoded
      .replace(/<\/?p>/g, "") // remove <p>
      .trim();

    items = html
      .split(/<br\s*\/?>|\n/gi) // split by <br/>
      .map((s) => s.replace(/<\/?strong>/g, "").trim()) //optional: remove strong tags
      .filter(Boolean);
  }

  return items.map((item, i) => (
    <li
      key={i}
      className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px] mb-[8px]
      before:absolute before:top-[4px] before:left-0 before:w-[15px] before:2xl:w-[17px]
      before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center
      before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
      dangerouslySetInnerHTML={{ __html: item }}
    />
  ));
};
