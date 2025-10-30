import { PiCaretLeft } from "react-icons/pi";
import DisplayBlogPost from "../blog/DisplayBlogPost";

function Preview({ onBackEditMode, blogData }) {
  return (
    <div className="bg-slate-50 pb-20 [box-shadow:rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,rgba(60,_64,_67,_0.15)_0px_2px_6px_2px]">
      <button
        onClick={onBackEditMode}
        className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-700 transition rounded-sm shadow-sm flex gap-1 items-center"
      >
        <PiCaretLeft className="text-xl" />
        <span>Edit</span>
      </button>
      <div className="mx-auto mt-20 max-w-80 pb-24 sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-3">
        {blogData ? (
          <DisplayBlogPost blog={blogData} />
        ) : (
          <p>There is no blog data</p>
        )}
      </div>
    </div>
  );
}

export default Preview;
