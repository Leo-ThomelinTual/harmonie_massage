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

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-5">
      <Navbar />
      <Hero />
      <main className="h-max w-full px-40 flex flex-col gap-10">
        <section className="h-max w-full items-center p-5 mx-20 bg-(--alt-background) flex flex-col gap-24 self-center rounded-md">
          <About />
          <h2 className="text-3xl font-bold uppercase">Categories Massage</h2>
          <div className="w-full h-max grid grid-cols-2 grid-rows-2 gap-4">
            <ProductCategory />
            <ProductCategory />
            <ProductCategory />
            <ProductCategory />
          </div>
          <h2 className="text-3xl font-bold uppercase">Massage Populaire</h2>
          <div className="flex gap-10">
            <ProductCard
              ImageSrc="/img/massage1.png"
              ImageAlt="Alt"
              CardType="Massage"
              Title="Title"
              Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum quae impedit, aspernatur, mollitia quaerat odit, adipisci neque enim reiciendis itaque distinctio inventore necessitatibus laudantium velit officia ipsa eius nesciunt!"
              SeeMoreLink="/"
              Price={20}
            />
            <ProductCard
              ImageSrc="/img/massage2.jpeg"
              ImageAlt="Alt"
              CardType="Massage"
              Title="Title"
              Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum quae impedit, aspernatur, mollitia quaerat odit, adipisci neque enim reiciendis itaque distinctio inventore necessitatibus laudantium velit officia ipsa eius nesciunt!"
              SeeMoreLink="/"
              Price={20}
            />
            <ProductCard
              ImageSrc="/img/hero.jpg"
              ImageAlt="Alt"
              CardType="Massage"
              Title="Title"
              Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum quae impedit, aspernatur, mollitia quaerat odit, adipisci neque enim reiciendis itaque distinctio inventore necessitatibus laudantium velit officia ipsa eius nesciunt!"
              SeeMoreLink="/"
              Price={20}
            />
          </div>
          <ButtonPrimary href="/">Voir plus</ButtonPrimary>

          <h2 className="uppercase font-bold text-3xl">Pack massage</h2>
          <div className="flex flex-col gap-3">
            <ProductPack />
            <ProductPack />
            <ProductPack />
          </div>

          <h2 className="uppercase font-bold text-3xl">Avis clients</h2>
          <div className="flex gap-5 justify-center">
            <Notice />
            <Notice />
            <Notice />
          </div>
          <ButtonPrimary href="/">Donner un avis</ButtonPrimary>
        </section>
        <section className="h-max w-full flex flex-col gap-10">
          <Faq />
          <Newsletter />
        </section>
      </main>
      <footer className="w-full px-40 flex flex-col h-max">
        <section className="h-max w-full p-5 bg-(--alt-background) mx-20 flex gap-24 self-center rounded-md">
          <article></article>
          <article></article>
          <article></article>
        </section>
        <p>Copy</p>
      </footer>
    </div>
  );
}
