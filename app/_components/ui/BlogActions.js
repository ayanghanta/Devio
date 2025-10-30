"use client";
import {
  PiEyeSlash,
  PiNotePencil,
  PiRocket,
  PiSpinner,
  PiTrash,
} from "react-icons/pi";
import Button from "./buttons/Button";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useState } from "react";
import {
  blogDeleteAction,
  blogPubclishAction,
} from "@/lib/actions/blogActions";
import toast from "react-hot-toast";
import Link from "next/link";

function BlogActions({ blogId, isPublished }) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handlePublish(makePublick) {
    setIsPublishing(true);
    const res = await blogPubclishAction({ blogId, isPublishing: makePublick });
    setIsPublishing(false);

    if (!res.success) toast.error(res.message);

    toast.success("Blog sucessfully published");
  }

  async function handleEditBlog() {}

  async function handleDeleteBlog() {
    setIsLoading(true);
    const res = await blogDeleteAction({ blogId });
    setIsLoading(false);
    if (!res?.success) toast.error(res.message);

    toast.success("Blog successfully deleted");
  }

  return (
    <div className="flex gap-2 justify-self-center">
      {isPublished && (
        <Button type="hide" onClick={() => handlePublish(false)}>
          {isPublishing ? (
            <PiSpinner className="text-xl" />
          ) : (
            <PiEyeSlash className="text-xl" />
          )}
        </Button>
      )}

      {!isPublished && (
        <Button type="publish" onClick={() => handlePublish(true)}>
          {isPublishing ? (
            <PiSpinner className="text-xl" />
          ) : (
            <PiRocket className="text-xl" />
          )}
        </Button>
      )}
      <Link href={`/editor/${blogId}`}>
        <Button type="edit">
          <PiNotePencil className="text-xl" />
        </Button>
      </Link>

      <Modal>
        <Modal.Open name="delete">
          <Button type="delete">
            <PiTrash className="text-xl" />
          </Button>
        </Modal.Open>
        <Modal.Window windowName="delete">
          <ConfirmDelete onConfirm={handleDeleteBlog} disabled={isLoading} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default BlogActions;
