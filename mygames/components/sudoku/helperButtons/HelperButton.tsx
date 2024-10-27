'use client'

import { ReactNode } from "react";

type HelperButtonProps = {
  children: ReactNode;
  handleOnClick: () => void;
};

const HelperButton = ({ children, handleOnClick }: HelperButtonProps) => {

  return (
    <>
      <button
        className="p-2 border rounded border-blue-600 hover:bg-blue-100 text-blue-500 hover:text-blue-800"
        onClick={handleOnClick}>{children}
      </button>
    </>
  )
};

export default HelperButton;