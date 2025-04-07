import Modal from "../../ui/Modals/Modal";
import StatusDropdown from "../../ui/Dropdown/StatusDropdown";

function TaskModal() {
  return (
    <Modal>
      <form className="flex items-center">
        <div className="
              flex basis-full justify-center flex-col gap-y-4 p-4
              bg-gray-800 border-gray-700
              border shadow-lg text-gray-800"
        >
          <p className="text-amber-50">TEST From Modal</p>
          {/* Title */}
          {/* Ellipsis Btn */}
          {/* Status */}

          <StatusDropdown
            // currentStatus={status}
            // setStatus={setStatus}
          />
        </div>
      </form>
    </Modal>
  )
};

export default TaskModal;
