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
        className="border rounded border-blue-600 hover:bg-blue-100 text-blue-500 hover:text-blue-800"
        onClick={onClick}>{children}
      </button>
    </>
  )
};

export default HelperButtons;