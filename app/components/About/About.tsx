import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <article className="flex gap-8 items-center w-full h-max relative">
      <div className="absolute -top-70" id="aboutme" />
      <div className="w-150 relative md:flex hidden h-100">
        <Image src="/img/background.png" fill alt="t" />
      </div>
      <div className="flex flex-col gap-3 w-full h-max">
        <h2 className="uppercase font-bold text-2xl">Qui je suis ?</h2>
        <p className="w-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
          molestiae commodi. Laborum modi eveniet sunt dolorem recusandae aut
          nulla voluptates, repudiandae minus cumque provident nesciunt rem.
          Nobis id reprehenderit expedita. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi, molestiae commodi. Laborum modi
          eveniet sunt dolorem recusandae aut nulla voluptates, repudiandae
          minus cumque provident nesciunt rem. Nobis id reprehenderit expedita.
        </p>
        <div className="flex gap-5 w-full h-max">
          <Link href="/">
            <Icon fontSize={24} icon="mdi:facebook" />
          </Link>
          <Link href="/">
            <Icon fontSize={24} icon="mdi:youtube" />
          </Link>
          <Link href="/">
            <Icon fontSize={24} icon="mdi:instagram" />
          </Link>
          <Link href="/">
            <Icon fontSize={24} icon="mdi:twitter" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default About;
