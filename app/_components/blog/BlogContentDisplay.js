import parse, { domToReact } from "html-react-parser";
import CodeBlock from "../ui/CodeBlock";
import { modifyHtml } from "@/app/_utils/modifyHtml";
import { DEFAULT_CODE_LANGUAGE, DEFAULT_THEME } from "@/app/_utils/constants";

function BlogContentDisplay({
  children,
  type = "preview",
  codeTheme,
  codeLng,
}) {
  const styledBlogContent = modifyHtml(children);
  const replaceOptions = {
    replace({ attribs, children }) {
      if (!attribs) return;

      if (attribs.class === "ql-syntax") {
        // FIXME:
        return (
          <CodeBlock
            theme={codeTheme || DEFAULT_THEME}
            codeLanguage={codeLng || DEFAULT_CODE_LANGUAGE}
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
