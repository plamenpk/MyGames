import { useDispatch } from "react-redux";
import { resetSelectedNumber } from "@/slices/selectedNumberSlice";


export const useOnDeleteClick = () => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    
    dispatch(resetSelectedNumber());
  };
  return { onDeleteClick };
};
