"use client";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, ReactNodeViewRenderer, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import DOMPurify from "dompurify";
import React from "react";
import EditorToolbar from "./EditorToolbar";
import { TableKit } from "@tiptap/extension-table";
import "./editor.css";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import "highlight.js/styles/monokai.css";

import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

const TextEditor = ({ setBlogContent, existingContnet }) => {
  const editor = useEditor({
    extensions: [
      // StarterKit,
      StarterKit.configure({
        codeBlock: false,
      }),
      Youtube,
      Image,
      TableKit.configure({
        table: { resizable: true },
      }),
      Placeholder.configure({
        placeholder: "Write your content here...",
        emptyEditorClass: "is-editor-empty",
      }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: existingContnet || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const cleanHtml = DOMPurify.sanitize(editor.getHTML());
      setBlogContent(cleanHtml);
    },
    editorProps: {
      attributes: {
        class:
          "editor-content text-slate-700 focus:outline-none bg-[#f6fff8] p-3 rounded-bl-md rounded-br-md text-slate-700 min-h-[700px] min-w-[100%] cursor-text border-x-slate-200 border-b-slate-200 border-x border-b",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="mt-6">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
