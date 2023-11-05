import React, { useCallback } from "react";
import { HeaderSortButton } from "./HeaderSortButton";
import {
  TableHeaderWrapper,
  HeaderTitle,
  HeaderButtonsContainer,
} from "./StyledWrappers";
import { HeaderSearchFilterButton } from "./HeaderSearchFilterButton";
import { getNextSortDirection } from "../utility/getNextSortDirection";
import { HeaderItem } from "../types";

function TableHeader({
  title,
  dataIndex,
  sortDirection,
  searchFilterState,
  setSortState,
  setSearchFilterState,
}: HeaderItem) {
  const nextSortDirection = getNextSortDirection(sortDirection);

  const onSort = useCallback(() => {
    setSortState({
      columnName: dataIndex,
      direction: nextSortDirection,
    });
  }, [nextSortDirection, dataIndex, setSortState]);

  const onSearchFilter = useCallback(
    (value: string) => {
      setSearchFilterState((filterState) => ({
        ...filterState,
        [dataIndex]: value,
      }));
    },
    [dataIndex, setSearchFilterState]
  );
  return (
    <TableHeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtonsContainer>
        <HeaderSortButton onSort={onSort} sortDirection={sortDirection} />
        <HeaderSearchFilterButton
          hasActiveFilter={!!searchFilterState[dataIndex]}
          onSearchFilter={onSearchFilter}
        />
      </HeaderButtonsContainer>
    </TableHeaderWrapper>
  );
}

export default TableHeader;
