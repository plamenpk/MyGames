import { useDispatch } from "react-redux";
import { setSelectedButton } from "@/slices/selectedButtonSlice";
import { REDO } from "../constants";

export const useOnRedoClick = () => {
  const dispatch = useDispatch();

  const onRedoClick = () => {
    dispatch(setSelectedButton(REDO))
  };
  return { onRedoClick };
}