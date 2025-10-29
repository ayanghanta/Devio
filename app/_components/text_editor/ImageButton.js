import { useCallback } from "react";
import ToolButton from "./ToolButton";
import { PiImage } from "react-icons/pi";

function ImageButton({ editor }) {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <ToolButton onClick={addImage}>
      <PiImage className="text-base xs:text-lg sm:text-xl" />
    </ToolButton>
  );
}

export default ImageButton;
