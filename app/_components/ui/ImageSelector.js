import { uploadBlogImageAction } from "@/app/_lib/actions/imageUploadAction";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiImageSquareLight, PiUploadSimpleLight } from "react-icons/pi";

function ImageSelector({
  onCloseModal,
  isCoverImage = false,
  setBlogImageUrl,
}) {
  const [previewUrl, setPreviewUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleImageSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = window.URL.createObjectURL(file);
    setImageFile(file);
    setPreviewUrl(url);
  }

  async function handleUploadImage() {
    if (!imageFile) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("isCoverImage", JSON.stringify(isCoverImage));

    const res = await uploadBlogImageAction(formData);

    setIsLoading(false);

    if (!res.success) toast.error(res.message);
    else {
      setBlogImageUrl?.(res.photoUrl);
      toast.success("image succesfully uploaded!");
      onCloseModal();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="coverImage"
        className="text-slate-700 font-semibold text-sm tracking-wide"
      >
        Blog Cover Image
      </label>

      {/* Upload Area */}
      <label
        htmlFor="coverImage"
        className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed ${
          previewUrl ? "border-slate-200" : "border-slate-300"
        } rounded-2xl cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition`}
      >
        {/* eslint-disable */}
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="object-cover h-full transition-all duration-300"
          />
        ) : (
          <>
            <PiImageSquareLight className="text-slate-500 w-10 h-10 mb-2" />
            <span className="text-slate-600 font-medium">
              Click to upload image
            </span>
            <span className="text-slate-400 text-sm mt-1">
              JPG, PNG, or WEBP (max 5MB)
            </span>
          </>
        )}
      </label>
      <input
        id="coverImage"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />
      <div className="flex justify-end mt-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-slate-800 disabled:bg-slate-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-700 transition w-fit"
          onClick={handleUploadImage}
          disabled={isLoading || !imageFile}
        >
          <PiUploadSimpleLight className="w-5 h-5" />
          <span>{isLoading ? "Uploading..." : "Upload"}</span>
        </button>
      </div>
    </div>
  );
}

export default ImageSelector;
