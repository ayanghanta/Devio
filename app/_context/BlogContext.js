"use client";

import { createContext, useContext, useReducer } from "react";

const BlogContext = createContext();

const initialSate = {
  title: "",
  description: "",
  category: [],
  codeLanguage: "javascript",
  codeTheme: "github",
  blogContent: "",
  writingMode: "create",
  blogId: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateContent":
      return { ...state, blogContent: action.payload };
    case "updateTitle":
      return { ...state, title: action.payload };
    case "updateDescription":
      return { ...state, description: action.payload };
    case "updateTheme":
      return { ...state, codeTheme: action.payload };
    case "changeWritingMode":
      return { ...state, writingMode: action.payload };
    case "setBlogId":
      return { ...state, blogId: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function BlogContextProvider({ children }) {
  const [
    {
      blogContent,
      codeTheme,
      codeLanguage,
      title,
      description,
      writingMode,
      blogId,
    },
    dispatch,
  ] = useReducer(reducer, initialSate);

  return (
    <BlogContext.Provider
      value={{
        blogContent,
        codeTheme,
        codeLanguage,
        title,
        description,
        writingMode,
        blogId,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("You use this BlogWriteContext outside Provider");

  return context;
}

export { BlogContextProvider, useBlogContext };
