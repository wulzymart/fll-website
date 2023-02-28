import { useRouter } from "next/router";
import React, { useState } from "react";

const TrackingInput = () => {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState("");
  return (
    <div className="flex w-full gap-0 bg-white justify-between">
      <div className="w-1/2 md:w-[80%]">
        <input
          className="p-3 md:w-full border-0 outline-0"
          type="text"
          value={trackingId}
          placeholder="ENTER YOUR TRACKING NUMBER"
          onChange={(e) => setTrackingId(e.target.value)}
        />
      </div>
      <div className="">
        <button
          onClick={() => {
            trackingId && router.push(`/tracking/${trackingId}`);
          }}
          className="p-3 min-w-fit text-white bg-red-600"
          type="button"
        >
          Track now
        </button>
      </div>
    </div>
  );
};

export default TrackingInput;
