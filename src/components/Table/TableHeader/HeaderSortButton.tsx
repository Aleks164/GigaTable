import React from "react";
import { SortButton } from "./StyledWrappers";
import { SortDirection } from "../types";
import { getSortDirectionIcon } from "../utility/getSortDirectionIcon";

export const HeaderSortButton = ({
  sortDirection,
  onSort,
}: {
  sortDirection?: SortDirection;
  onSort: () => void;
}) => (
  <SortButton onClick={onSort} icon={getSortDirectionIcon(sortDirection)} />
);
