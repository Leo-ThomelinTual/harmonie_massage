import Image from "next/image";
import ButtonPrimary from "../Utils/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../Utils/ButtonSecondary/ButtonSecondary";

const Hero = () => {
  return (
    <section className="flex w-screen h-150 md:h-150 relative">
      <div className="relative w-full h-full">
        <Image src="/img/background.png" sizes="20" fill alt="Hero Image" />
      </div>
      <div className="absolute top-1/2 left-1/2 text-center gap-2 flex flex-col -translate-x-1/2 -translate-y-40 text-background">
        <h1 className="font-bold uppercase text-3xl md:text-4xl text-nowrap">
          Website name
        </h1>
        <p>
          Site en rapport avec le métier massage SPA d`une cliente freelance.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center md:gap-10 absolute top-1/2 -translate-1/2 left-1/2">
        <ButtonPrimary isActive={true}>Prendre rendez-vous</ButtonPrimary>
        <ButtonSecondary>Voir plus</ButtonSecondary>
      </div>
    </section>
  );
};

export default Hero;
