"use client";

import parse, { domToReact } from "html-react-parser";
import { useBlogContext } from "@/app/_context/BlogContext";
import { modifyHtml } from "@/app/_utils/modifyHtml";
import CodeBlock from "../ui/CodeBlock";

function BlogContentDisplay({
  children,
  type = "preview",
  codeTheme,
  codeLng,
}) {
  const { codeTheme: codeThemeContext, codeLanguage: codeLngContext } =
    useBlogContext();

  // console.log(codeTheme, codeLanguage);

  const styledBlogContent = modifyHtml(children);
  const replaceOptions = {
    replace({ attribs, children }) {
      if (!attribs) return;

      if (attribs.class === "ql-syntax") {
        return (
          <CodeBlock
            theme={type === "preview" ? codeThemeContext : codeTheme}
            codeLanguage={type === "preview" ? codeLngContext : codeLng}
          >
            {domToReact(children, replaceOptions)}
          </CodeBlock>
        );
      }
    },
  };
  const blogDOM = parse(styledBlogContent, replaceOptions);
  return <>{blogDOM}</>;
}

export default BlogContentDisplay;
