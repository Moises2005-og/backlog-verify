import { gamesCards } from "@/utils/mocks";
import Image from "next/image";

export function GamesAreaAverageHours() {
  return (
    <div className="bg-[#171717] text-white font-bold flex justify-center items-center flex-col"> 
      <h2 className="text-[#f0ac71] text-[30px] px-[5%] py-8 font-bold">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%] py-5">
        {gamesCards?.map((game) => (
          <div key={game.id} className="flex gap-5 items-center">
            <Image
              alt="Imagem de jogo"
              src={game.image}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <ul className="flex flex-col gap-3">
              <li className="text-[18px]">{game.title}</li>
              <li>Main Story</li>
              <li>Main + Extra</li>
              <li>Completionist</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
