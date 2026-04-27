"use client";
import Image from "next/image";
import ButtonSecondary from "../Utils/ButtonSecondary/ButtonSecondary";
import { useState } from "react";
import ModalPack from "../Utils/ModalPack/ModalPack";

type ProductPackProps = {
  imageSrc: string;
  imageAlt: string;
  packType: string;
  packName: string;
  packDescription: string;
  packPrice: number;
  packWarning: string;
};

const ProductPack = ({
  imageSrc,
  imageAlt,
  packType,
  packName,
  packDescription,
  packPrice,
  packWarning,
}: ProductPackProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <article className="bg-(--bg-banner) xl:w-250 overflow-hidden justify-center w-full h-max md:h-60 rounded-md flex flex-col md:flex-row md:gap-5 md:p-3">
      <div className="relative w-full md:w-80 h-60 md:h-full">
        <Image src={imageSrc} alt={imageAlt} fill />
      </div>
      <div className="flex flex-col w-full p-3 md:p-0  gap-2 justify-between">
        <div>
          <p className="text-(--muted) uppercase">{packType}</p>
          <h3 className="uppercase font-bold text-2xl md:text-3xl text-background">
            {packName}
          </h3>
        </div>
        <p className="text-background ">{packDescription}</p>

        <div className="w-full flex justify-end gap-5 text-background items-center">
          <ButtonSecondary onClick={() => setActive(true)}>
            Contenu
          </ButtonSecondary>
          <p className="font-bold text-2xl">{packPrice}$</p>
          <ModalPack
            isActive={isActive}
            setActive={setActive}
            PackTitle={packName}
            packPrice={packPrice}
            PackDescription={packDescription}
            PackWarning={packWarning}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductPack;
