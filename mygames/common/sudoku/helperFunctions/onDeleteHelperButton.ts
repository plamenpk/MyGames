import { useDispatch } from "react-redux";
import { resetSelectedNumber } from "@/slices/selectedNumberSlice";


export const useOnDeleteHelperButton = () => {
  const dispatch = useDispatch();

  const onDeleteHelperButton = () => {
    
    dispatch(resetSelectedNumber());
  };
  return { onDeleteHelperButton };
};
