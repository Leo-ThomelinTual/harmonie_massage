import Image from "next/image";
import Link from "next/link";

type NoticeProps = {
  username: string;
  datePost: string;
  comment: string;
  link: string;
};

const Notice = ({ username, datePost, comment, link }: NoticeProps) => {
  return (
    <article className="flex p-5 bg-background hover:shadow-lg transition-shadow ease duration-400 justify-between flex-col h-max gap-5 md:gap-0 md:h-71.25 w-full md:w-107.5">
      <div className="flex gap-2 items-center relative">
        <Image
          className="rounded-full w-10 h-10"
          src="/img/background.png"
          alt=""
          width={50}
          height={50}
        />
        <h3 className="text-2xl">{username}</h3>
        <p className="ml-auto text-(--muted)">{datePost}</p>
      </div>
      <p>{comment}</p>
      <Link className="text-blue-500 self-end" href={link}>
        lien vers le commentaire
      </Link>
    </article>
  );
};

export default Notice;
