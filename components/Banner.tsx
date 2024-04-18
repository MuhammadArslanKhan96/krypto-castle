import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <div className="flex px-28 max-md:px-8 max-md:justify-center justify-between gap-10 items-center">
        <div className="flex flex-col py-12 gap-2 w-full">
          <h3 className="text-[56px] font-semibold md:w-[550px] text-white leading-[64px] max-md:text-[32px] max-lg:text-[32px] max-sm:text-[28px] max-md:leading-10 max-sm:leading-10">
            Revolutionize Digital Transactions with <span className="text-[#7D52F4]">KRYC</span> Token
          </h3>
          <p className="text-[24px] text-[#99A0AE]   mt-4 leading-[28px] max-md:text-[20px] max-lg:text-[20px] max-sm:text-[18px] max-md:leading-8 max-sm:leading-8">
            We're breaking barriers by enabling seamless and secure exchanges, even in environments where constant internet connectivity isn't guaranteed.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href=""
              className="text-[#99A0AE] text-base cursor-pointer border-b-1 border-[#99A0AE]"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center rounded-xl border-1.5 px-10 py-4 gap-6">
          <h4 className="text-[24px] text-white">Token Swap</h4>
          <div className="w-full px-4 py-3 bg-[#29313C] flex flex-row justify-between  items-center rounded-[10px]">
            <div className="flex flex-row gap-x-[10px] items-center">
              <Image alt="menu" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/img/sol.svg"/>
                <h1 className="text-[16px] text-[#99A0AE]">SOL</h1>
                </div>
                <div className="bg-[#FFFFFF1A] w-[2px] h-[28px] mx-4"></div>
                <input type="number" className="text-[16px] w-[290px] bg-[#29313C] text-start border-none font-medium" value="1.00"/>
                <div>
                  <p className="text-[#99A0AE] text-[16px]">$NN</p>
                  </div>
                  </div>
          <div className="rounded-full w-10 h-10 bg-[#29313C] flex justify-center items-center">
          <Image alt="menu" loading="lazy" width="32" height="32" src="/img/sol.svg"/>
      </div>
      </div>
    </div>
    </div>
  );
}

