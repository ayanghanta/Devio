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
export const themes = {
  atomOneDark,
  monokai,
  vs,
  isblEditorLight,
  anOldHope,
  monokaiSublime,
  nightOwl,
  github,
};

function CodeBlock({ children, theme, codeLanguage }) {
  return (
    <SyntaxHighlighter
      language={codeLanguage}
      style={themes[theme]}
      showLineNumbers={false}
      showInlineLineNumbers={false}
      wrapLines={true}
      wrapLongLines={true}
      customStyle={{ borderRadius: "2px" }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
