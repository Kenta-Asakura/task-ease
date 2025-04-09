import Modal from "../../ui/Modals/Modal";
import StatusDropdown from "../../ui/Dropdown/StatusDropdown";
import EllipsisButton from "../../ui/Buttons/EllipsisButton";

function TaskModal({ setIsTaskModalOpen }) {
  return (
    <Modal onClose={() => setIsTaskModalOpen(false)}>
      <form className="flex items-center basis-6/12">
        <div className="flex basis-full justify-center flex-col gap-y-4 p-4
                        bg-gray-800 border-gray-700
                        border shadow-lg text-gray-800
                        text-white"
        >
          <div className="flex justify-between">
            {/* Title */}
            <h4>TEST From Modal</h4>

            {/* Ellipsis Btn */}
            <EllipsisButton></EllipsisButton>
          </div>

          {/* SubTasks */}
          <h5>Current Status</h5>
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
