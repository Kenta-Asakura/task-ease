function Modal({ id, children, onClose }) {
  const handleOutsideClick = (e) => {
    e.target.id === id && onClose();
  };

  return (
    <div
      id={id}
      className="fixed z-[500] inset-0
        flex justify-center
        bg-black bg-opacity-30"
      onClick={handleOutsideClick}
    >
      {children}
    </div>
  )
};

export default Modal;
