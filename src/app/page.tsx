import { Hero } from "@/components/ui/hero";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col ">
        <Hero />
        <InfiniteScroll />
        <div className="flex h-48 bg-black items-center justify-center text-white text-base font-bold">Ainda não ta pronto Dessa {":)"}</div>
      </main>
    </div>
  );
}
