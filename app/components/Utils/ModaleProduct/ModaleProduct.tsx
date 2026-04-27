type ProductProps = {
  isActive: boolean;
  setActive: (value: boolean) => void;
  productName: string;
  productWarning: string;
  productBenefits: string;
  productDescription: string;
  productPrice: number;
};

export const Modale = ({
  isActive,
  setActive,
  productName,
  productWarning,
  productBenefits,
  productDescription,
  productPrice,
}: ProductProps) => {
  return (
    <>
      {isActive ? (
        <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden z-10 backdrop-brightness-70">
          <section className="w-full h-max sm:h-1/2 2xl:w-380 p-3 md:p-20 xl:h-220 flex flex-col gap-2 fixed top-1/2 -translate-y-1/2 lg:top-1/2 lg:left-1/2 left-0 lg:-translate-1/2">
            <article className="w-full overflow-hidden h-10 shadow-lg bg-(--bg-banner) flex rounded-md">
              <h3 className="font-bold flex justify-center items-center text-2xl w-full text-background uppercase">
                {productName}
              </h3>
              <button
                onClick={() => setActive(false)}
                className="bg-(--danger) cursor-pointer w-10 h-full flex items-center justify-center font-bold text-background"
              >
                X
              </button>
            </article>
            <section className="w-full shadow-lg h-full rounded-md bg-(--alt-background)">
              <article className="p-3 md:p-5 h-full flex flex-col gap-3">
                <p className="bg-(--danger) rounded-md text-background font-bold p-3 items-center flex">
                  {productWarning}
                </p>
                <article className="h-full flex flex-col gap-3">
                  <h2 className="uppercase font-bold text-2xl">
                    Bienfait du massage
                  </h2>
                  <p>{productBenefits}</p>
                </article>
                <article className="h-full flex flex-col gap-3">
                  <h2 className="uppercase font-bold text-2xl">
                    Description détaillé du massage
                  </h2>
                  <p>{productDescription}</p>
                </article>
                <div className="self-end text-2xl font-bold">
                  <p>Prix : {productPrice}$</p>
                </div>
              </article>
            </section>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Modale;
