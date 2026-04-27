import Image from "next/image";
import ButtonSecondary from "../Utils/ButtonSecondary/ButtonSecondary";

const Newsletter = () => {
  return (
    <article className="flex gap-5 h-max">
      <div className="relative lg:flex hidden w-100 shadow-xl">
        <Image className="rounded-md" src="/img/background.png" alt="" fill />
      </div>
      <div className="flex flex-col shadow-xl gap-5 text-background p-5 bg-(--bg-banner) rounded-md w-full">
        <h2 className="uppercase font-bold text-2xl">
          Inscrivez-vous à notre newsletter
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          adipisci distinctio aperiam eum, dolorem temporibus quo eligendi nulla
          quidem. Minus recusandae explicabo dicta vitae perspiciatis distinctio
          quisquam ut, hic laudantium?
        </p>
        <form
          className="flex gap-3 self-center flex-col md:flex-row items-center"
          action=""
        >
          <input
            className="placeholder:uppercase bg-background text-foreground w-75 px-2 h-9 placeholder:text-(--muted)"
            type="email"
            placeholder="Entrez votre email"
            required
          />
          <ButtonSecondary>S`inscrire</ButtonSecondary>
        </form>
      </div>
    </article>
  );
};

export default Newsletter;
