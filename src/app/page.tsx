import { Career } from "@/components/ui/career";
import { Hero } from "@/components/ui/hero";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col ">
        <Hero />
        <InfiniteScroll />
        <Career />
      </main>
    </div>
  );
}
