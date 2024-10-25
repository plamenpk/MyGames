import { useDispatch } from "react-redux";
import { setSelectedButton } from "@/slices/selectedButtonSlice";
import { UNDO } from "../constants";

export const useOnUndoClick = () => {
  const dispatch = useDispatch();

  const onUndoClick = () => {
    dispatch(setSelectedButton(UNDO))
  };
  return { onUndoClick };
}
