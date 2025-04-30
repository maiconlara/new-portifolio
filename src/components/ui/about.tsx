import { RiArrowDownSLine } from "@remixicon/react";
import Link from "next/link";
import { BackgroundBeams } from "./background-beam";

export const About = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-72px)] w-full flex items-center justify-center bg-black">
      <BackgroundBeams />

      {/* <div className="flex flex-col lg:flex-row w-full h-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-between gap-10">
        <div className="flex flex-col w-full max-w-[800px] gap-16 items-start justify-center z-10 pt-18 lg:pt-0">
          <div className="flex flex-col items-start w-full gap-8 select-none">
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold font-text select-none text-center">
              Olá, me chamo Maicon
            </p>
            <p className="text-white text-2xl md:text-4xl xl:text-5xl font-bold font-title select-none text-start ">
              Desenvolvedor Frontend focado em criar experiências digitais que
              realmente fazem a diferença.
            </p>
          </div>
          <Link
            href="#career"
            className="flex flex-row gap-1 items-center justify-center bg-purple-medium rounded-full px-4 h-10 hover:bg-purple-strong transition-colors "
          >
            <p className="text-white text-base font-medium font-text select-none">
              Conheça mais
            </p>
            <RiArrowDownSLine size={18} className="text-white mt-[2px]" />
          </Link>
        </div>
      </div> */}
    </div>
  );
};
