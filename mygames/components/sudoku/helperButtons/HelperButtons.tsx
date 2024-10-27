'use client'
import HelperButton from "./HelperButton";
import { useOnDeleteClick } from "@/common/sudoku/helperFunctions/onDeleteHelperButton";
import { useOnUndoClick } from "@/common/sudoku/helperFunctions/onUndoClick";
import { useOnRedoClick } from "@/common/sudoku/helperFunctions/onRedoClick";
import { onHintClick } from "@/common/sudoku/helperFunctions/onHintClick";
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const HelperButtons = () => {
  const { onDeleteClick } = useOnDeleteClick();
  const { onUndoClick } = useOnUndoClick();
  const { onRedoClick } = useOnRedoClick();
  return (
    <div className="grid grid-cols-4 gap-0">
      <HelperButton handleOnClick={onUndoClick}><ArrowUturnLeftIcon /></HelperButton>
      <HelperButton handleOnClick={onRedoClick}><ArrowUturnRightIcon /></HelperButton>
      <HelperButton handleOnClick={onDeleteClick}><XMarkIcon /></HelperButton>
      <HelperButton handleOnClick={onHintClick}>Hint...</HelperButton>
    </div>
  )
}

export default HelperButtons;