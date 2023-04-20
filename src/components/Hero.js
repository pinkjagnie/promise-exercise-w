import React from "react";
import Image from "next/image";

import { jokesEmoji } from "@/img/index";

const Hero = () => {
  return(
    <section className="w-[80%] mx-auto pt-10">
      <div className="flex justify-between items-center">
        <Image src={jokesEmoji} width={200} height={200} alt="emoji" />
        <div className="text-slate-900">
          <p className="text-[28px] font-bold text-center">Hello! Welcome to the most fun place on the whole internet!</p>
          <p className="text-lg font-bold text-center pt-4">Are you here to hear a joke that will change your life?</p>
          <p className="text-lg text-center pt-2">So click on the button below!</p>
          <div className="flex justify-center items-center pt-4">
            <button className="py-4 px-6 bg-blue-gradient font-medium text-[18px] outline-none rounded-[10px] text-slate-800">Draw a life changing joke</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;