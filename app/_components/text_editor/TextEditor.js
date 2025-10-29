"use client";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import DOMPurify from "dompurify";
import React from "react";
import EditorToolbar from "./EditorToolbar";
import { TableKit } from "@tiptap/extension-table";
import "./editor.css";

const TextEditor = React.memo(
  ({ handleWrite, storedContent, containerStyle }) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        Youtube,
        Image,
        TableKit.configure({
          table: { resizable: true },
        }),
        Placeholder.configure({
          placeholder: "Write your content here...",
          emptyEditorClass: "is-editor-empty",
        }),
      ],
      content: storedContent || "",
      immediatelyRender: false,
      onUpdate: ({ editor }) => {
        // Call handleWrite with the editor content
        if (handleWrite) {
          const cleanHtml = DOMPurify.sanitize(editor.getHTML());
          handleWrite(cleanHtml);
          // handleWrite(editor.getHTML());
        }
      },
      editorProps: {
        attributes: {
          class:
            "editor-content text-slate-700 focus:outline-none bg-[#f6fff8] p-3 rounded-bl-md rounded-br-md text-slate-700 min-h-[700px] min-w-[100%] cursor-text border-x-slate-200 border-b-slate-200 border-x border-b",
        },
      },
    });

    function setEditorContent(newHtml) {
      const sanitizedHtml = DOMPurify.sanitize(newHtml);

      if (editor) editor.commands.setContent(sanitizedHtml, false);

      handleWrite(sanitizedHtml);
    }

    if (!editor) return null;

    return (
      <div className={`${containerStyle ? containerStyle : "mt-6"}`}>
        <EditorToolbar editor={editor} onSetEditorContent={setEditorContent} />
        <EditorContent editor={editor} />
      </div>
    );
  }
);
TextEditor.displayName = "TextEditor";

export default TextEditor;
