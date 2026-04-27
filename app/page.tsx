"use client";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroHeader/HeroHeader";
import About from "./components/About/About";
import ProductCard from "./components/ProductCard/ProductCard";
import ButtonPrimary from "./components/Utils/ButtonPrimary/ButtonPrimary";
import Notice from "./components/NoticeCard/NoticeCard";
import Newsletter from "./components/Newsletter/Newsletter";
import ProductPack from "./components/ProductPackage/ProductPackage";
import Faq from "./components/Faq/FAQ";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import { products } from "./data/products";
import { packs } from "./data/packs";
import { category } from "./data/category";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { notice } from "./data/notice";

export default function Home() {
  const [limit, setLimit] = useState(6);
  const [isActive, setActive] = useState(true);

  function handleClick() {
    setLimit(999);
    setActive(!isActive);
  }
  return (
    <div id="home" className="h-full w-full flex flex-col gap-10">
      <header className="flex gap-2 flex-col">
        <Navbar />
        <Hero />
      </header>
      <main className="h-max w-full px-2 lg:px-40 xl:px-80 flex flex-col gap-10">
        <section className="h-max w-full items-center p-5 mx-20 bg-(--alt-background) shadow-lg flex flex-col gap-24 self-center rounded-md">
          <About />
          <h2 className="text-2xl md:text-3xl text-nowrap font-bold uppercase">
            Catégories des massages
          </h2>
          <div className="w-full h-max flex justify-center gap-10 flex-wrap 2xl:flex-nowrap">
            {category.map((c) => (
              <ProductCategory
                key={c.id}
                imageSrc={c.imageSrc}
                imageAlt={c.imageAlt}
                categoryName={c.categoryName}
              />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-nowrap uppercase">
            Les massages proposé
          </h2>
          <div className="flex flex-wrap justify-center gap-10 relative">
            <div className="absolute -top-50" id="services" />
            {products.slice(0, limit ? limit : products.length).map((p) => (
              <ProductCard
                key={p.id}
                ImageSrc={p.imageSrc}
                ImageAlt={p.imageAlt}
                CardType={p.cardType}
                Title={p.name}
                Description={p.cardDescription}
                Price={p.cardPrice}
                Warning={p.Warning}
                Benefits={p.Benefits}
              />
            ))}
          </div>
          <ButtonPrimary
            setActive={setActive}
            isActive={isActive}
            onClick={() => handleClick()}
          >
            Voir plus
          </ButtonPrimary>
          <h2 className="uppercase font-bold text-2xl md:text-3xl text-nowrap">
            Les packs de massage
          </h2>
          <div className="flex flex-wrap gap-3 w-full justify-center relative">
            <div className="absolute -top-60" id="packs" />
            {packs.map((p) => (
              <ProductPack
                key={p.id}
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
                packType={p.packType}
                packName={p.packName}
                packDescription={p.packDescription}
                packPrice={p.packPrice}
                packWarning={p.packWarning}
              />
            ))}
          </div>

          <h2 className="uppercase font-bold text-2xl md:text-3xl text-nowrap">
            Nos avis clients
          </h2>
          <div className="flex flex-wrap gap-5 justify-center relative">
            <div className="absolute -top-100" id="notice" />
            {notice.map((n) => (
              <Notice
                key={n.id}
                username={n.username}
                datePost={n.datePost}
                comment={n.comment}
                link={n.link}
              />
            ))}
          </div>
          <ButtonPrimary isActive={true}>Donner un avis</ButtonPrimary>
        </section>
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
