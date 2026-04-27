import Image from "next/image";
import ButtonPrimary from "../Utils/ButtonPrimary/ButtonPrimary";

type ProductCateoryProps = {
  imageSrc: string;
  imageAlt: string;
  categoryName: string;
};

const ProductCategory = ({
  imageSrc,
  imageAlt,
  categoryName,
}: ProductCateoryProps) => {
  return (
    <article className="w-75 overflow-hidden group/categories hover:shadow-xl transition-shadow duration-300 ease h-70 rounded-md relative">
      <Image
        className="group-hover/categories:blur-[2px] transition-all ease duration-200"
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="25"
      />

      <div className="absolute bg-white/50 flex flex-col items-center justify-around w-full h-1/3 transition-all ease duration-500 -bottom-13 group-hover/categories:bottom-0 ">
        <h3 className="text-2xl uppercase">{categoryName}</h3>
        <ButtonPrimary isActive={true}>Go </ButtonPrimary>
      </div>
    </article>
  );
};

export default ProductCategory;
