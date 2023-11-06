import React from "react";
import AllSettingsResetButton from "./AllSettingsResetButton";
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
        <AllSettingsResetButton
          setSearchFilterState={setSearchFilterState}
          searchFilterState={searchFilterState}
        />
      </HeaderToolBoxWrapper>
    </>
  );
}

export default HeaderToolBox;
