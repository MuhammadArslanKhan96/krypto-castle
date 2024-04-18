import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center w-[55px] h-[55px] rounded-[100px] max-sm:w-[35px]  max-sm:h-[35px] max-md:w-[50px] max-md:h-[50px]">
            <Image src={"/img/logo.svg"} alt="logo" width={55} height={55} className="rounded-[100px]" />
        </div>
    );
}
