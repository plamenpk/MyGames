import { useDispatch } from "react-redux";
import { setSelectedButton } from "@/slices/selectedButtonSlice";

export const useOnUndoClick = () => {
  const dispatch = useDispatch();

  const onUndoClick = () => {
    dispatch(setSelectedButton('undo'))
  };
  return { onUndoClick };
}
