import { RiUserStarFill } from "@remixicon/react";

export const About = () => {
  return (
    <div
      id="about"
      className=" overflow-hidden min-h-[calc(100vh-72px)] w-full flex pb-18 flex-col items-center justify-start bg-black gap-18 overf"
    >
      <div className="flex flex-col w-full items-center justify-center gap-5 max-w-[86vw]">
        <div className="flex flex-row w-full items-center justify-center gap-2">
          <RiUserStarFill size={18} className="text-white" />
          <p className="text-white text-lg font-medium font-text cursor-default">
            Sobre
          </p>
        </div>
        <p className="text-white text-center text-4xl font-semibold font-title cursor-default">
          Sobre mim
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center gap-10">
        <div className="flex flex-col items-start justify-between lg:h-[514px] w-full rounded-xl  bg-[#111111] border border-lines ">
        </div>
      </div>
    </div>
  );
};
