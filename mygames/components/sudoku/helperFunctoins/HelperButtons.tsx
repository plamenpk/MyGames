'use client'

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const HelperButtons = ({ children }: ButtonProps) => {
  const onClick = () => {
    console.log();
  }
  return (
    <>
      <button
        className=" rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800"
        onClick={onClick}>{children}
        {/* <ArrowLeftCircleIcon className="text-blue-500" /> */}
      </button>
    </>
  )
};

export default HelperButtons;