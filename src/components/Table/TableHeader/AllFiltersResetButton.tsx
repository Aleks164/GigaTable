import React, { useMemo } from "react";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { SearchFilter } from "../types";

function AllFiltersResetButton({
  setSearchFilterState,
  searchFilterState,
}: {
  setSearchFilterState: (value: React.SetStateAction<SearchFilter>) => void;
  searchFilterState: SearchFilter;
}) {
  const isDisabled = useMemo(
    () =>
      !Object.entries(searchFilterState).filter(([_, value]) => value).length,
    [searchFilterState]
  );
  return (
    <Button
      title="Сбросить все фильтры"
      icon={<ReloadOutlined />}
      onClick={() => setSearchFilterState({})}
      disabled={isDisabled}
    />
  );
}

export default AllFiltersResetButton;
