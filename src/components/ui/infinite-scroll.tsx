import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import { RiTerminalLine, RiStarFill } from "@remixicon/react";

const stack = [
  {
    name: "React",
  },
  {
    name: "PWA",
  },
  {
    name: "Next.js",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express",
  },
  {
    name: "React Native",
  },
  {
    name: "Expo",
  },
  {
    name: "Prisma",
  },
  {
    name: "Svelte",
  },
  {
    name: "JavaScript",
  },
  {
    name: "CMS",
  },
  {
    name: "Resend",
  },
  {
    name: "Angular",
  },
  {
    name: "MySQL",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "JWT",
  },
  {
    name: "i18N",
  },
  {
    name: "Vite",
  },
];

export const InfiniteScroll = () => {
  return (
    <div className="relative flex w-full flex-col h-24 items-center  justify-center overflow-hidden bg-black border-t border-lines border-b">
      <div className="flex flex-row items-center justify-center px-6 w-full max-w-[86vw] 2xl:max-w-[1420px] ">
        <Marquee pauseOnHover className="[--duration:50s] ">
          {stack.map((stack) => (
            <div
              key={stack.name}
              className="flex flex-row items-center justify-center gap-2 pr-2"
            >
              <RiStarFill size={20} className="text-purple-strong/60" />
              <div className="flex flex-row items-center justify-center gap-2 pl-2">
                <p className="text-white font-text cursor-default select-none">
                  {stack.name}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/10"></div>
      </div>
    </div>
  );
};
