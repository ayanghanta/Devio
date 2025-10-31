import parse from "html-react-parser";
import { modifyHtml } from "@/app/_utils/modifyHtml";
import { DEFAULT_CODE_LANGUAGE, DEFAULT_THEME } from "@/app/_utils/constants";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  monokai,
  vs,
  isblEditorLight,
  anOldHope,
  monokaiSublime,
  nightOwl,
  github,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
const themes = {
  atomOneDark,
  monokai,
  vs,
  isblEditorLight,
  anOldHope,
  monokaiSublime,
  nightOwl,
  github,
};
function BlogContentDisplay({
  children,
  type = "preview",
  codeTheme,
  codeLng,
}) {
  const styledBlogContent = modifyHtml(children);

  const blogDOM = parse(styledBlogContent, {
    replace: (domNode, index) => {
      if (
        domNode.type === "tag" &&
        domNode.name === "pre" &&
        domNode.children?.[0]?.name === "code"
      ) {
        const codeString =
          domNode.children[0].children
            ?.map((child) => child.data || "")
            .join("") || "";

        return (
          <SyntaxHighlighter
            key={`code-block-${index}`}
            language={codeLng || DEFAULT_CODE_LANGUAGE}
            style={themes[codeTheme || DEFAULT_THEME]}
            customStyle={{ marginTop: "10px", marginBottom: "8px" }}
          >
            {codeString}
          </SyntaxHighlighter>
        );
      }

      if (domNode.type === "tag" && domNode.name === "code") {
        return (
          <code
            key={`inline-${index}`}
            className="font-mono text-sm leading-snug text-white bg-gray-900 p-2 rounded-sm overflow-x-auto"
          >
            {domNode.children?.[0]?.data}
          </code>
        );
      }
    },
  });

  return <>{blogDOM}</>;
}

export default BlogContentDisplay;
