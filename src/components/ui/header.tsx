import icon from "@/assets/icon.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-black flex flex-row h-18 w-full items-center justify-center border-b border-lines">
      <div className="bg-black flex flex-row h-full w-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-between px-4 ">
        <div className="flex flex-row gap-2 items-center select-none">
          <Image
            width={44}
            height={44}
            alt="M"
            className="h-auto w-[34px]"
            src={icon}
            quality={100}
            priority={true}
          />
          <p className="font-title text-white text-xl font-semibold">
            Maicon Lara
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <Link
            className="text-white font-text text-xl hover:text-purple-light transition-colors"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-white font-text text-xl hover:text-purple-light transition-colors"
            href="#career"
          >
            Carreira
          </Link>
          <Link
            className="text-white font-text text-xl hover:text-purple-light transition-colors"
            href="/"
          >
            Projetos
          </Link>
          {/* <div className="flex flex-row gap-2 items-center justify-center rounded-full w-10  h-10 cursor-pointer text-base font-text font-medium border border-lines transition-colors">
            <RiMailSendLine size={16} className="text-white" />
          </div> */}
        </div>
      </div>
    </header>
  );
};
