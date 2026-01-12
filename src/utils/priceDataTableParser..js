import parse, { domToReact, htmlToDOM } from "html-react-parser";

/**
 * Parses HTML table string and extracts structured data
 * @param {string} htmlString - Raw HTML table string
 * @returns {Object} - Structured table data with columns and rows
 */
export function parseTableData(htmlString) {
  if (!htmlString) return null;

  const table_columns = [];
  const table_row_list = [];
  let currentRow = [];
  let rowIndex = 0;
  let isInTbody = false;
  let isInTr = false;
  let cellContent = "";

  const options = {
    replace: (domNode) => {
      // Check if we're entering tbody
      if (domNode.type === "tag" && domNode.name === "tbody") {
        isInTbody = true;
        return null;
      }

      // Track tr elements in tbody
      if (isInTbody && domNode.type === "tag" && domNode.name === "tr") {
        isInTr = true;
        currentRow = [];
        return null;
      }

      // Extract cell content (td or th)
      if (isInTbody && isInTr && domNode.type === "tag" && (domNode.name === "td" || domNode.name === "th")) {
        // Get the inner HTML of the cell
        const cellHTML = domToReact(domNode.children, options);

        // Convert React elements back to HTML string
        let htmlString = "";
        if (typeof cellHTML === "string") {
          htmlString = cellHTML;
        } else if (Array.isArray(cellHTML)) {
          htmlString = cellHTML.join("");
        } else if (cellHTML && cellHTML.props) {
          // Simple reconstruction for common cases
          const getHTMLFromReactElement = (element) => {
            if (typeof element === "string") return element;
            if (!element || !element.props) return "";

            const { children, ...attrs } = element.props;
            const tag = element.type;
            const attrsStr = Object.entries(attrs)
              .map(([key, val]) => `${key}="${val}"`)
              .join(" ");

            const childrenStr = Array.isArray(children) ? children.map(getHTMLFromReactElement).join("") : getHTMLFromReactElement(children);

            return `<${tag}${attrsStr ? " " + attrsStr : ""}>${childrenStr}</${tag}>`;
          };
          htmlString = getHTMLFromReactElement(cellHTML);
        }

        // Fallback: use original HTML from domNode
        if (!htmlString && domNode.children) {
          htmlString = domNode.children
            .map((child) => {
              if (child.type === "text") return child.data;
              if (child.type === "tag") {
                const innerText = child.children?.map((c) => (c.type === "text" ? c.data : "")).join("") || "";
                return `<${child.name}>${innerText}</${child.name}>`;
              }
              return "";
            })
            .join("");
        }

        currentRow.push(htmlString.trim());
        return null;
      }

      return undefined;
    },
  };

  // Parse the HTML
  parse(htmlString, options);

  // Alternative simpler approach using regex
  try {
    const tbodyMatch = htmlString.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
    if (!tbodyMatch) return null;

    const tbodyContent = tbodyMatch[1];
    const trMatches = tbodyContent.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi);

    if (!trMatches || trMatches.length === 0) return null;

    trMatches.forEach((trHTML, index) => {
      const tdMatches = trHTML.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi);
      if (!tdMatches) return;

      const cells = tdMatches.map((td) => {
        // Extract content between opening and closing tags
        const content = td.replace(/<t[dh][^>]*>|<\/t[dh]>/gi, "");
        return content.trim();
      });

      if (index === 0) {
        // First row is headers
        table_columns.push(...cells);
      } else {
        // Remaining rows are data
        table_row_list.push(cells);
      }
    });

    return {
      table_columns,
      table_row_list,
    };
  } catch (error) {
    console.error("Error parsing table data:", error);
    return null;
  }
}

/**
 * Renders a custom styled table component
 * @param {Object} tableData - Structured table data
 * @param {Array} tableData.table_columns - Array of header column HTML strings
 * @param {Array} tableData.table_row_list - Array of rows, each row is an array of cell HTML strings
 * @param {Object} options - Styling options
 * @param {string} options.headColor - Background color for header row
 * @param {string} options.headTextColor - Text color for header row
 * @returns {JSX.Element} - Rendered table component
 */
export function renderCustomTable(tableData, options = {}) {
  if (!tableData || !tableData.table_columns || !tableData.table_row_list) {
    return null;
  }

  const { headColor = "#000000", headTextColor = "#ffffff" } = options;

  const { table_columns, table_row_list } = tableData;

  return (
    <div className="w-full overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      <table className="w-full min-w-[700px] sm:min-w-full border-collapse">
        <thead>
          <tr
            style={{
              backgroundColor: headColor,
              "--th-color": headTextColor,
            }}
            className="text-left"
          >
            {table_columns.map((item, index) => (
              <th
                key={index}
                className={`text_editor p-[10px_20px] sm:p-[15px_25px] lg:p-[20px_30px] 2xl:p-[25px_35px] 3xl:p-[30px_40px] [&>_h5]:m-0 [&>_h6]:m-0 first:rounded-[5px_0_0_5px] last:rounded-[0_5px_5px_0] ${
                  index === 0 ? "w-[30%]" : "w-[35%]"
                } !text-[var(--th-color)] [&_*]:!text-[var(--th-color)] [&_*]:!fill-[var(--th-color)]`}
              >
                {parse(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_row_list.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[#191919]/30 hover:bg-[#D3D3D3]/20 transition-all duration-300 ease-in-out">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="text_editor p-[15px_20px] sm:p-[20px_25px] lg:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[35px_40px] [&>p:last-of-type]:mb-0 [&>_p]:leading-[1.8] [&>_p]:text-[#212121] [&>_h6]:m-0 [&_b]:font-medium mb-0"
                >
                  {parse(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * All-in-one function: Parse HTML string and render table
 * @param {string} htmlString - Raw HTML table string
 * @param {Object} options - Styling options
 * @returns {JSX.Element} - Rendered table component
 */
export function renderTableFromHTML(htmlString, options = {}) {
  const tableData = parseTableData(htmlString);
  return renderCustomTable(tableData, options);
}

/**
 * Renders a price table with right-aligned columns (except first column)
 * @param {Object} tableData - Structured table data
 * @param {Array} tableData.table_columns - Array of header column HTML strings
 * @param {Array} tableData.table_row_list - Array of rows, each row is an array of cell HTML strings
 * @returns {JSX.Element} - Rendered price table component
 */
export function renderPriceTable(tableData) {
  if (!tableData || !tableData.table_columns || !tableData.table_row_list) {
    return null;
  }

  const { table_columns, table_row_list } = tableData;

  return (
    <div className="w-full overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      <table className="w-full max-sm:min-w-[700px] border-collapse">
        <thead>
          <tr className="text-left border-b border-[#0A558F]/30">
            {table_columns.map((item, index) => (
              <th
                key={index}
                className={`text_editor p-[10px_0] sm:p-[15px_0] lg:p-[20px_0] 2xl:p-[20px_0] 3xl:p-[30px_0] [&>_h5]:m-0 [&_h5]:text-[15px] 2xl:[&_h5]:text-[18px] 3xl:[&_h5]:text-[22px] whitespace-nowrap ${
                  index === 0 ? "w-[50%]" : "w-[25%] text-right"
                }`}
              >
                {parse(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_row_list.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[#0A558F]/30">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`text_editor p-[10px_0] sm:p-[15px_0] 3xl:p-[20px_20px_20px_0] [&>p:last-of-type]:mb-0 [&>_p]:leading-[1.8] [&>_p,h6]:text-[#00335B] [&_b]:font-medium [&_b]:text-[#212121] [&_b]:pt-[20px] mb-0 ${
                    cellIndex === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {parse(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * All-in-one function: Parse HTML string and render price table
 * @param {string} htmlString - Raw HTML table string
 * @returns {JSX.Element} - Rendered price table component
 */
export function generatePriceTable(htmlString) {
  const tableData = parseTableData(htmlString);
  return renderPriceTable(tableData);
}
