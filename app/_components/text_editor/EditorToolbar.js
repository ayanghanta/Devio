import {
  PiCode,
  PiCodeFill,
  PiLineVerticalThin,
  PiLinkSimple,
  PiListBullets,
  PiListNumbers,
  PiQuotes,
  PiTable,
  PiTextB,
  PiTextItalic,
  PiTextStrikethrough,
  PiTextUnderline,
} from "react-icons/pi";
import ToolButton from "./ToolButton";
import HeadingDropdown from "./HeadingDropdown ";
import ImageButton from "./ImageButton";
import YoutubeButton from "./YoutubeButton";
import { useEditorState } from "@/app/_hooks/useEditorState";

function EditorToolbar({ editor }) {
  const version = useEditorState(editor); // this is used to upadate the active state

  return (
    <div className="bg-slate-200 rounded-tl-md justify-between rounded-tr-md px-3 py-4 flex flex-wrap lg:flex-nowrap gap-4 sm:gap-0 items-center cursor-auto">
      <div className="flex flex-wrap lg:flex-nowrap gap-2 items-center">
        {/* SECTION: 1 */}
        <HeadingDropdown editor={editor} />

        <PiLineVerticalThin className="slate-300 text-base sm:text-lg" />
        {/* SECTION: 2 */}

        <ToolButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <PiTextB className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ToolButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <PiTextItalic className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ToolButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
        >
          <PiTextUnderline className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ToolButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
        >
          <PiTextStrikethrough className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <PiLineVerticalThin className="slate-300 text-base sm:text-lg" />
        {/* SECTION: 3 */}

        <ToolButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <PiListBullets className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ToolButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <PiListNumbers className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <PiLineVerticalThin className="slate-300 text-base sm:text-lg" />
        {/* SECTION: 4 */}

        <ToolButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
        >
          <PiCodeFill className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>
        <ToolButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
        >
          <PiCode className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ImageButton editor={editor} />

        <YoutubeButton editor={editor} />

        <PiLineVerticalThin className="slate-300 text-base sm:text-lg" />
        {/* SECTION: 5   */}

        <ToolButton
          isActive={editor.isActive("link")}
          onClick={() => {
            const url = prompt("Enter a URL");
            if (url) {
              editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url })
                .run();
            }
          }}
        >
          <PiLinkSimple className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>

        <ToolButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          <PiQuotes className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>
        <ToolButton
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
          isActive={editor.isActive("table")}
        >
          <PiTable className="text-base xs:text-lg sm:text-xl" />
        </ToolButton>
      </div>
      {/* NOTEME: */}

      {/* <AiWriterPanel.Button id={editorId} />
      <AiWriterPanel.Window
        windowId={editorId}
        onGetFieldData={onGetFieldData}
        onSetEditorContent={onSetEditorContent}
      /> */}
    </div>
  );
}

export default EditorToolbar;
