const Footer = () => {
  return (
    <footer className="w-full px-2 lg:px-40 pb-10 xl:px-80 h-max">
      <section className="h-max w-full p-2 md:p-5 bg-(--alt-background) shadow-xl flex flex-wrap justify-center gap-3 rounded-md">
        <article className="w-100 flex text-center flex-col items-center h-max gap-5">
          <h2 className="uppercase text-2xl">Informations</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            repellat animi magni commodi assumenda debitis nihil fugit minima
            voluptate eius ad numquam dolore maxime, deserunt, quae quos illum,
            rem vitae.
          </p>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </article>
        <article className="w-100 flex flex-col items-center h-max gap-5">
          <h2 className="uppercase text-2xl">Légals</h2>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </article>
        <article className="w-100 flex flex-col items-center h-max gap-5">
          <h2 className="uppercase text-2xl">Autres liens</h2>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
