"use client";
import Image from "next/image";
import Modale from "../Utils/ModaleProduct/ModaleProduct";
import { useState } from "react";

type ProductCardProps = {
  ImageSrc: string;
  ImageAlt: string;
  CardType: string;
  Title: string;
  Description: string;
  Price: number;
  Warning: string;
  Benefits: string;
};

const ProductCard = ({
  ImageSrc,
  ImageAlt,
  CardType,
  Title,
  Description,
  Price,
  Warning,
  Benefits,
}: ProductCardProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <article className="bg-background shadow-lg rounded-2xl overflow-hidden w-80 sm:w-95 h-120 flex flex-col">
      <div className="relative w-full h-1/2 md:h-3/5">
        <Image src={ImageSrc} alt={ImageAlt} fill />
      </div>
      <div className="flex flex-col justify-between h-full w-full p-3">
        <div className="flex flex-col">
          <p className="text-(--muted)">{CardType}</p>
          <h3 className="text-2xl font-bold">{Title}</h3>
          <p>
            {Description.length > 250
              ? `${Description.substring(0, 250)} ...`
              : Description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="cursor-pointer h-max w-max text-blue-500"
            onClick={() => setActive(true)}
          >
            En savoir plus
          </button>
          <p className="self-end font-bold text-2xl p-3">{Price}€</p>
        </div>
      </div>

      <Modale
        isActive={isActive}
        setActive={setActive}
        productName={Title}
        productWarning={Warning}
        productBenefits={Benefits}
        productDescription={Description}
        productPrice={Price}
      />
    </article>
  );
};

export default ProductCard;
