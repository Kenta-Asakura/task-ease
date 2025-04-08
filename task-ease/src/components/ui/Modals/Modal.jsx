import { useRef } from "react";

function  Modal({ id, children, onClose }) {
  const overlayRef = useRef(null);

  const handleOutsideClick = (e) => {
    // e.target.id === id && onClose();
    e.target === overlayRef.current && onClose();
  };

  return (
    <div
      ref={overlayRef}
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
