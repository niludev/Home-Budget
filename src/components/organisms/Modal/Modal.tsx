import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import { useAppContext } from "../../../AppContext";
import { ModalType } from "../../../type";

const Modal: React.FC<{}> = () => {

  const {showModal, closeModal, modalType} = useAppContext()

  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    switch (modalType) {
      case ModalType.EditItem:
        setTitle("Edit Item")
        break;

        case ModalType.NewItem:
          setTitle("Creating a new item")
          break;
    
      default:
        break;
    }
  }, [modalType])

  const renderModalContent = () => {
    switch (modalType) {
      case ModalType.EditItem:
        return <p>Editing item</p>

      case ModalType.NewItem:
        return <p>New item</p>
    
      default:
        return <p>Modal type not recognized!</p>
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.7)",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: showModal === false ? "none" : "block",
        zIndex: "1000",
      }}
    >
      <div
        className="rounded-md"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          width: "60vw",
          height: "60vh",
          border: "1px solid #eee",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <div className=" flex flex-col justify-center h-full w-full px-3 py-3">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl" style={{ color: "#3D4451" }}>
              {title}
            </h1>
            <Button
              className="btn btn-square my-2"
              onClick={() => closeModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div>
            {renderModalContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
