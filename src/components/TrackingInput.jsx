import React from "react";

const TrackingInput = () => {
  return (
    <div className="flex w-full gap-0 bg-white justify-between">
      <div className="w-1/2 md:w-[80%]">
        <input
          className="p-3 md:w-full border-0 outline-0"
          type="text"
          name="trackingId"
          placeholder="ENTER YOUR TRACKING NUMBER"
          value=""
          onChange=""
        />
      </div>
      <div className="">
        <button className="p-3 min-w-fit text-white bg-red-600" type="button">
          Track now
        </button>
      </div>
    </div>
  );
};

export default TrackingInput;
