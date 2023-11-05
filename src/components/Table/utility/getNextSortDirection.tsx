import { SortDirection } from "../types";

export const getNextSortDirection = (
  sortDirection: SortDirection | undefined
) => {
  switch (sortDirection) {
    case "asc":
      return undefined;
    case "desc":
      return "asc";
    default:
      return "desc";
  }
};
