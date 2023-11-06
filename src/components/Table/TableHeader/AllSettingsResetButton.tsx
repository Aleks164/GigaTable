import React, { useMemo } from "react";
import { Button, Tooltip } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { SearchFilter } from "../types";
import { defaultColumnsDataIndex } from "../utility/const";
import { useShowingColumns } from "~/store/useShowingColumns";

function AllSettingsResetButton({
  setSearchFilterState,
  searchFilterState,
}: {
  setSearchFilterState: (value: React.SetStateAction<SearchFilter>) => void;
  searchFilterState: SearchFilter;
}) {
  const { showingColumnsName, setShowingColumnsName } = useShowingColumns();
  const isDisabled = useMemo(
    () =>
      !Object.entries(searchFilterState).filter(([, value]) => value).length &&
      showingColumnsName.length === defaultColumnsDataIndex.length,
    [searchFilterState, showingColumnsName]
  );

  const onReset = () => {
    setSearchFilterState({});
    setShowingColumnsName(defaultColumnsDataIndex);
  };

  return (
    <Tooltip title="Сбросить все настройки">
      <Button
        icon={<ReloadOutlined />}
        onClick={onReset}
        disabled={isDisabled}
      />
    </Tooltip>
  );
}

export default AllSettingsResetButton;
