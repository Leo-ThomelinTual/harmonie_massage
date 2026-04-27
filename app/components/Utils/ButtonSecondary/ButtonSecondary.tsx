"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";

type ButtonSecondaryPropos = {
  onClick?: MouseEventHandler;
  children: React.ReactNode;
};

const ButtonSecondary = ({ onClick, children }: ButtonSecondaryPropos) => {
  return (
    <button
      className="px-10 py-4 cursor-pointer flex transition-color ease duration-500 gap-3 group uppercase overflow-hidden hover:text-(--bg-secondary-button) justify-center relative items-center h-9 w-max bg-(--bg-secondary-button) text-(--fg-secondary-button)"
      onClick={onClick}
    >
      <div className="-translate-x-full bg-(--fg-secondary-button) transition-translate ease duration-500 z-0 w-full h-full group-hover:translate-x-0 absolute" />
      <p className="z-1">{children}</p>
    </button>
  );
};

export default ButtonSecondary;
