"use client";

import { Container } from "@/components/container";
import "./style.css";
import { SendButton } from "@/components/button";
import { Hours } from "@/components/hours/hours";
import { Header } from "@/components/header";
import { GamesAreaAverageHours } from "@/components/gamesAreaAverageHours";
import { useState } from "react";

export default function Home() {

    function MaxAndMin(min: number, max: number) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   const [number, setNumber] = useState<number>(MaxAndMin(1, 3))

  return (
    <>
      <Header />
      <div className={`relative mb-0 ${number === 1 ? "bgMain":number === 2 ? "bgMain2":number === 3 ? "bgMain3":"" }`}>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Container>
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              BacklogVerify: The Game
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl text-white font-medium">
              A Round-Based Daily Guessing Game
            </p>
            <div className="mt-6">
              <SendButton
                loading={false}
                onclick={() => console.log("")}
                text="Play Now"
              />
            </div>
          </div>
        </Container>
      </div>
        <Hours />
        <GamesAreaAverageHours />
    </>
  );
}
