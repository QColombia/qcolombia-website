import { CodeBlockProps } from "./interface";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const DEFAULT_CUSTOM_STYLE = {
  width: "100%",
  borderBottomRightRadius: "1rem",
  borderBottomLeftRadius: "1rem",
  borderTopRightRadius: "0",
  borderTopLeftRadius: "0",
  margin: "0",
  padding: "1rem",
};

export const CodeBlock = ({
  codeContent,
  style = darcula,
  language,
  showLineNumbers,
  customStyle,
  width,
}: CodeBlockProps) => {
  const widthClass = typeof width === 'string'
    ? `w-[${width || '100%'}]`
    : `w-[${width?.default || '100%'}] ${width?.sm ? `sm:w-[${width.sm}]` : ""} ${
    width?.md ? `md:w-[${width.md}]` : ""
  } ${width?.lg ? `lg:w-[${width.lg}]` : ""} ${
    width?.xl ? `xl:w-[${width.xl}]` : ""
  } ${width?.xl2 ? `2xl:w-[${width.xl2}]` : ""}`;
  return(
  <div className={`bg-gray-700 p-0 ${widthClass} rounded-2xl shadow-md shadow-stone-900 h-fit`}>
    <div className="flex">
      <div className="rounded-[50%] h-3 w-3 bg-red-500 mx-1 my-3 ml-5" />
      <div className="rounded-[50%] h-3 w-3 bg-yellow-500 mx-1 my-3" />
      <div className="rounded-[50%] h-3 w-3 bg-green-500 mx-1 my-3" />
    </div>
    <SyntaxHighlighter
      children={codeContent}
      style={style}
      language={language}
      showLineNumbers={showLineNumbers}
      customStyle={customStyle || DEFAULT_CUSTOM_STYLE}
    />
  </div>
)};
