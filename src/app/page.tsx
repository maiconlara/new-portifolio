import { Hero } from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
