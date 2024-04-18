import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <div className="flex flex-col gap-5 mt-4">
      <div className="flex justify-center items-center">
        <h4 className="text-[#99A0AE]">OUR INVESTORS</h4>
      </div>
      <div className="relative py-4 overflow-hidden">
        <Marquee className="flex text-[20px] gap-10 font-semibold w-fit">
          <p className="px-10 text-[24px] text-[#99A0AE]">KRYC TOKEN COMING SOON</p>
          <p className="px-10 text-[24px] text-[#99A0AE]">KRYC TOKEN COMING SOON</p>
          <p className="px-10 text-[24px] text-[#99A0AE]">KRYC TOKEN COMING SOON</p>
        </Marquee>
      </div>
    </div>
  );
};

export default SlidingText;
