"use client"

import { Container } from "@/components/container";
import "./style.css";
import { SendButton } from "@/components/button";

export default function Home() {
  return (
    <>
        <div className={`bgMain`}>
        <div className="absolute bg-[#0000006d] h-[30.9%] w-[100%] top-[9.1%] z-25"></div>
          <Container>
            <div className="flex flex-col items-center justify-center pt-[60px] ">        
              <h1 className="sm:text-[25px] text-white font-bold z-100">BacklogVerify: The Game</h1>
              <p className="sm:text-[16px] text-white font-bold z-100 mb-2">A Round-Based Daily Guessing Game</p> 
              <SendButton loading={false} onclick={() => console.log("")} text="Play Now"/>
            </div>
          </Container>
        </div>
    </>
  );
}
