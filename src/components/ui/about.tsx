import { RiUserStarFill } from "@remixicon/react";
import Image from "next/image";
import facePhoto from "@/assets/facePhoto.webp";
import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export const About = () => {
  return (
    <div
      id="about"
      className=" overflow-hidden min-h-[calc(100vh-72px)] w-full flex py-18 flex-col items-center justify-start bg-black gap-18 overf"
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
        <div className="flex flex-col items-start justify-between lg:h-auto w-full rounded-xl p-10  bg-[#111111] border border-lines gap-10">
          <div className="flex flex-row w-full items-center justify-between gap-5 pb-10 border-b border-lines">
            <div className="flex flex-col gap-1 items-start cursor-default">
              <p className="text-3xl text-white font-title">Maicon Lara</p>
              <p className="text-base text-white/80 font-text">
                Desenvolvedor Frontend - Universidade Federal do Paraná
              </p>
            </div>
            <div className="flex flex-row px-4 h-[34px] rounded-full bg-background border border-lines items-center justify-start gap-2">
              <div className="relative flex w-2 h-2 rounded-full">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></div>
                <div className="relative inline-flex h-2 w-2 rounded-full  bg-[#10b74d]"></div>
              </div>
              <p className="text-sm text-white/80 font-text">
                Aberto a propostas
              </p>
            </div>
          </div>

          <div className="flex flex-row w-full gap-6 items-start justify-start">
            <div className="flex flex-col h-full w-full max-w-[320px] gap-6">
              <Image
                height={853}
                width={640}
                alt="Maicon Lara"
                src={facePhoto}
                priority
                quality={100}
                className="rounded-xl w-full h-auto object-cover"
              />
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/maiconlara/"
              >
                <InteractiveHoverButton>
                  Acessar LinkedIn
                </InteractiveHoverButton>
              </Link>
            </div>
            <div className="flex flex-col w-full h-[500px] bg-primary rounded-xl border border-lines gap-6 p-8">
              <p className="text-white/80 text-lg font-text cursor-default leading-8 text-justify">
                Sou desenvolvedor formado em Análise e Desenvolvimento de
                Sistemas na{" "}
                <span className="text-purple-light underline underline-offset-4 hover:text-purple-light/80 transition-colors">
                  <Link target="_blank" href="https://ufpr.br/">
                    Universidade Federal do Paraná.
                  </Link>
                </span>
                <span>
                  {" "}
                  Com sólidos conhecimentos em
                  <span className="text-purple-light"> React.js</span>,
                  <span className="text-purple-light"> Next.js</span>,
                  <span className="text-purple-light"> TypeScript </span>e mais,
                  eu busco unir design e funcionalidade para criar interfaces
                  profissionais, priorizando performance, acessibilidade e
                  experiência do usuário. Sou conhecido pela atenção aos
                  detalhes e pela habilidade de transformar ideias em soluções
                  práticas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
