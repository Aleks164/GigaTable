import React from "react";
import AllFiltersResetButton from "./AllFiltersResetButton";
import ColumnsSelectorButton from "./ColumnsSelectorButton";
import { SearchFilter } from "../types";
import { HeaderToolBoxWrapper, TableNameWrapper } from "./StyledWrappers";

function HeaderToolBox({
  setSearchFilterState,
  searchFilterState,
}: {
  setSearchFilterState: (value: React.SetStateAction<SearchFilter>) => void;
  searchFilterState: SearchFilter;
}) {
  return (
    <>
      <TableNameWrapper>GigaTable</TableNameWrapper>
      <HeaderToolBoxWrapper>
        <ColumnsSelectorButton />
        <AllFiltersResetButton
          setSearchFilterState={setSearchFilterState}
          searchFilterState={searchFilterState}
        />
      </HeaderToolBoxWrapper>
    </>
  );
}

export default HeaderToolBox;
