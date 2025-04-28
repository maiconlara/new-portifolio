import { AngularIcon } from "@/assets/angular-icon";
import { JavaScriptIcon } from "@/assets/javascript-icon";
import { NextIcon } from "@/assets/next-icon";
import { ReactIcon } from "@/assets/react-icon";
import { TailwindIcon } from "@/assets/tailwind-icon";
import { TypeScriptIcon } from "@/assets/typescript-icon";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export const HeroOrbiting = () => {
  return (
    <div className="relative flex h-[500px] min-w-[350px] flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <ReactIcon size={40} />
        <AngularIcon  size={40} />
        <JavaScriptIcon size={32} />
        <NextIcon  size={36}/>
        <TailwindIcon size={36} />
        <TypeScriptIcon size={32} />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <ReactIcon size={30} />
        <AngularIcon size={30} />
        <div className="flex h-7 w-7">
          <JavaScriptIcon size={32} />
        </div>
        <NextIcon size={36} />
        <TailwindIcon size={36} />
        <div className="flex h-7 w-7">
          <TypeScriptIcon size={32} />
        </div>
      </OrbitingCircles>
    </div>
  );
};
