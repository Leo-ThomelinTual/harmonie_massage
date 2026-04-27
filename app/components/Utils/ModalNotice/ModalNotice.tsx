type ModalNoticeProps = {
  NoticeName: string;
};

const ModalNotice = () => {
  return (
    <article className="p-5 h-full flex flex-col gap-3">
      <p className="bg-(--danger) rounded-md text-background font-bold p-3 items-center flex">
        À éviter en cas de plaies ouvertes, d`inflammations aiguës ou de
        troubles cardiaques graves.
      </p>
      <article className="h-full flex flex-col gap-3">
        <h2 className="uppercase font-bold text-2xl">Contenu du pack</h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem modi
          veritatis rerum, quaerat excepturi est amet molestias exercitationem
          fugiat, asperiores facilis ab doloribus repellendus quam hic error
          laboriosam ullam. Ad.
        </p>
        <ul className="list-disc px-15 flex flex-col gap-3">
          <li>Massage lomi-lomi</li>
          <li>Massage hawaienne</li>
          <li>Massage californien</li>
        </ul>
      </article>
      <article className="h-full flex flex-col">
        <h2 className="uppercase font-bold text-2xl">
          Description du pack massage
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi, qui
          similique dicta autem quos porro nulla corrupti, itaque in a
          temporibus saepe labore ullam modi quas ducimus laborum dolorum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Non nisi, qui
          similique dicta autem quos porro nulla corrupti, itaque in a
          temporibus saepe labore ullam modi quas ducimus laborum dolorum!
        </p>
      </article>
      <div className="self-end text-2xl font-bold">
        <p>Prix : 99$</p>
      </div>
    </article>
  );
};

export default ModalNotice;
