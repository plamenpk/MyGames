'use client'
import HelperButton from "./HelperButton";
import { useOnDeleteHelperButton } from "@/common/sudoku/helperFunctions/onDeleteHelperButton";
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const HelperButtons = () => {
  const { onDeleteHelperButton} = useOnDeleteHelperButton();
  return (
    <div className="grid grid-cols-4 gap-0">
      <HelperButton handleOnClick={onDeleteHelperButton}><ArrowUturnLeftIcon /></HelperButton>
      <HelperButton handleOnClick={onDeleteHelperButton}><ArrowUturnRightIcon /></HelperButton>
      <HelperButton handleOnClick={onDeleteHelperButton}><XMarkIcon /></HelperButton>
      <HelperButton handleOnClick={onDeleteHelperButton}>Hint...</HelperButton>
    </div>
  )
}

export default HelperButtons;