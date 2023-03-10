import { closeModal } from "@/modalcontrol";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ id, title, children }) => {
  return (
    <div
      id={id}
      className="w-[100%] h-screen flex items-center hidden justify-center absolute top-0 left-0 "
      style={{ zIndex: 2000 }}
    >
      <div className="w-full h-screen fixed  bg-black  top-0 right-0 opacity-80 z-[3000]"></div>
      <div className="min-w-[400px]  md:min-w-600px min-h-[200px] bg-white rounded-lg overflow-hidden z-[4000] ">
        <div
          id={`modal-${id}`}
          className="w-full h-12 bg-blue-800 flex text-white  items-center justify-between px-4"
        >
          <p className="text-lg font-medium"> {title ? title : "loading"}</p>
          <span
            className="text-3xl "
            onClick={() => {
              closeModal(id);
            }}
          >
            <IoMdCloseCircle />
          </span>
        </div>
        <div className="p-2 md:p-10">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
