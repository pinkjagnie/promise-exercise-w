import React, { useState } from "react";
import Image from "next/image";

import { jokesEmoji } from "@/img/index";

import SingleJoke from "./SingleJoke";

const Hero = () => {
  const [drawJoke, setDrawJoke] = useState(false);

  const jokesHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random', {
      headers: {
      'Content-Type': 'application/json',
     },
    }).then(response => response.json())
    .then(data => {
      // console.log(data.value);
      setDrawJoke(data.value)
    });
  };

  return(
    <>
    <section className="w-[80%] mx-auto pt-12">
      <div className="flex justify-between items-center">
        <Image src={jokesEmoji} width={200} height={200} alt="emoji" />
        <div className="text-slate-900">
          <p className="text-[28px] font-bold text-center">Hello! Welcome to the most fun place on the whole internet!</p>
          <p className="text-lg font-bold text-center pt-4">Are you here to hear a joke that will change your life?</p>
          <p className="text-lg text-center pt-2">So click on the button below!</p>
          <div className="flex justify-center items-center pt-4">
            <button className="py-4 px-6 bg-blue-gradient font-medium text-[18px] outline-none rounded-[10px] text-slate-800" onClick={jokesHandler}>Draw a life changing joke</button>
          </div>
        </div>
      </div>
    </section>
    {!drawJoke && <p className="w-[60%] mx-auto pt-20 text-center text-lg font-medium">To see a joke, you have to draw it first! Click the button above</p>}
    {drawJoke && <SingleJoke joke={drawJoke} />}
    </>
  )
};

export default Hero;