import { MouseEventHandler } from "react";

type ButtonPrimaryProps = {
  isActive?: boolean;
  setActive?: (value: boolean) => void;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
};

const ButtonPrimary = ({ isActive, onClick, children }: ButtonPrimaryProps) => {
  return (
    <>
      {isActive ? (
        <button
          className="cursor-pointer overflow-hidden uppercase px-10 relative py-4 hover:shadow-lg transition-shadow ease duration-500 flex gap-3 justify-center items-center h-9 w-max text-(--fg-primary-button) group bg-(--bg-primary-button)"
          onClick={onClick}
        >
          <div className="-translate-y-full bg-(--bg-secondary-button) transition-translate ease duration-500 z-0 w-full h-full group-hover:translate-y-0 absolute" />
          <p className="z-1 group-hover:text-(--bg-primary-button) transition-colors duration-500 ease">
            {children}
          </p>
        </button>
      ) : null}
    </>
  );
};

export default ButtonPrimary;
