import Modal from "../../ui/Modals/Modal";
import StatusDropdown from "../../ui/Dropdown/StatusDropdown";
import EllipsisButton from "../../ui/Buttons/EllipsisButton";

function TaskModal({ task, setIsTaskModalOpen }) {
  const { id, title, description, status } = task;

  return (
    <Modal onClose={() => setIsTaskModalOpen(false)}>
      <form className="flex basis-6/12">
        <div className="flex basis-full flex-col gap-y-4 p-4
                        bg-gray-800 border-gray-700
                        border shadow-lg text-gray-800
                        text-white"
        >
          <div className="flex justify-between">
            <h4>{title}</h4>

            {/* Ellipsis Btn */}
            <EllipsisButton></EllipsisButton>
          </div>

          {/* SubTasks */}
          <h5>Current Status</h5>
          <StatusDropdown
            currentStatus={status}
            // setStatus={setStatus}
          />
        </div>
      </form>
    </Modal>
  )
};

export default TaskModal;
