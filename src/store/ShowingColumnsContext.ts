import { createContext } from "react";

export type ShowingColumnsName = string[];
export type SetShowingColumnsName = React.Dispatch<
  React.SetStateAction<string[]>
>;

interface ShowingColumnsProps {
  showingColumnsName: ShowingColumnsName;
  setShowingColumnsName: SetShowingColumnsName;
}

export const ShowingColumnsContext = createContext<ShowingColumnsProps>({
  showingColumnsName: [],
  setShowingColumnsName: () => {},
});
