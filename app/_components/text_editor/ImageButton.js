import { useCallback } from "react";
import ToolButton from "./ToolButton";
import { PiImage } from "react-icons/pi";
import Modal from "../ui/Modal";
import ImageSelector from "../ui/ImageSelector";

function ImageButton({ editor }) {
  const addImage = useCallback(
    (url) => {
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }
  return (
    <Modal>
      <Modal.Open name="blogImage">
        <ToolButton>
          <PiImage className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>
      </Modal.Open>
      <Modal.Window windowName="blogImage">
        <ImageSelector setBlogImageUrl={addImage} />
      </Modal.Window>
    </Modal>
  );
}

export default ImageButton;
