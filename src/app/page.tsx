import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="relative overflow-hidden h-[600px] w-full flex items-center justify-center bg-black">
          <Particles quantity={150}  className="absolute flex w-full h-full" />
          <div className="flex flex-col gap-8 items-center justify-center z-10">

          <p className="text-white text-5xl font-bold font-title select-none ">
            Sites rápidos e com design elegante.
          </p>
          <p className="text-white text-2xl font-medium font-title select-none ">
            Trazendo sonhos à realidade.
          </p>
          </div>
          
        </div>
      </main>
    </div>
  );
}
