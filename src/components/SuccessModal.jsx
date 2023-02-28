import Image from "next/image";
import React from "react";
import Modal from "./Modal";

const SuccessModal = ({ message, id }) => {
  return (
    <Modal id={id} title="Thank you">
      <div className=" p-8 flex flex-col justify-center text-center gap-4">
        <p className="text-gray-800 text-lg font medium">{message}</p>
        <div className="flex justify-center ">
          <Image src="/success.png" width="40" height="40" alt="success" />
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
