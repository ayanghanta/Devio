import { useEffect, useState } from "react";

export function useEditorState(editor) {
  const [stateVersion, setStateVersion] = useState(0);

  useEffect(() => {
    if (!editor) return;
    const rerender = () => setStateVersion((v) => v + 1);
    editor.on("selectionUpdate", rerender);
    editor.on("transaction", rerender);
    return () => {
      editor.off("selectionUpdate", rerender);
      editor.off("transaction", rerender);
    };
  }, [editor]);

  return stateVersion; // use this to trigger re-render
}
