import { useContext } from "react";
import { ShowingColumnsContext } from "./ShowingColumnsContext";

export function useShowingColumns() {
  return useContext(ShowingColumnsContext);
}
