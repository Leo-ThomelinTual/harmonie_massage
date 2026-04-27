import { packs } from "@/app/data/packs";
import { products } from "@/app/data/products";

type ModalPackProps = {
  isActive: boolean;
  setActive: (value: boolean) => void;
  PackTitle: string;
  PackWarning: string;
  PackDescription: string;
  packPrice: number;
};

const ModalPack = ({
  isActive,
  setActive,
  PackTitle,
  PackWarning,
  PackDescription,
  packPrice,
}: ModalPackProps) => {
  return (
    <>
      {isActive ? (
        <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden z-10 backdrop-brightness-70">
          <section className="w-full h-3/4 2xl:w-380 p-3 md:p-20 xl:h-220 flex flex-col gap-2 fixed sm:h-1/2 -translate-y-1/2 top-1/2 lg:left-1/2 left-0 lg:-translate-1/2">
            <article className="w-full overflow-hidden h-10 shadow-lg bg-(--bg-banner) flex rounded-md">
              <h3 className="font-bold flex justify-center items-center text-2xl w-full text-background uppercase">
                {PackTitle}
              </h3>
              <button
                onClick={() => setActive(false)}
                className="bg-(--danger) w-10 cursor-pointer h-full flex items-center justify-center font-bold text-background"
              >
                X
              </button>
            </article>
            <section className="w-full overflow-y-scroll shadow-lg h-full rounded-md bg-(--alt-background)">
              <article className="p-3 md:p-5 h-max flex flex-col gap-3">
                <p className="bg-(--danger) rounded-md text-background font-bold p-3 items-center flex">
                  {PackWarning}
                </p>
                <article className="h-full flex flex-col gap-3 text-foreground">
                  <h2 className="uppercase font-bold text-2xl">
                    Contenu du pack
                  </h2>
                  <ul className="list-disc px-10 flex flex-col gap-2 text-sm lg:text-base">
                    {products.map((p) => (
                      <li key={p.id}>
                        {p.name}
                        <p>{p.cardDescription}</p>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="h-full flex flex-col gap-3 text-foreground">
                  <h2 className="uppercase font-bold text-lg lg:text-2xl">
                    Description du pack massage
                  </h2>
                  <p className="text-sm lg:text-base">{PackDescription}</p>
                </article>
                <div className="self-end text-foreground font-bold text-2xl">
                  <p>Prix : {packPrice}$</p>
                </div>
              </article>
            </section>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default ModalPack;
