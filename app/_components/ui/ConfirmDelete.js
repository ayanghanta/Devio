import Button from "./buttons/Button";

function ConfirmDelete({
  resourceName = "Blog",
  onCloseModal,
  onConfirm,
  disabled,
}) {
  return (
    <div>
      <p className="mb-3 text-xl text-black">Delete {resourceName}</p>
      <p>
        This will permanently remove the {resourceName} from your records. This
        action cannot be undone. Do you wish to continue?
      </p>
      <div className="mt-8 space-x-3 flex justify-end">
        <Button type="cancel" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button
          type="delete"
          disabled={disabled}
          onClick={() => {
            onConfirm?.();
            onCloseModal();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
