import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { useShowingColumns } from "~/store/useShowingColumns";
import { DataType, SearchFilter, Sort } from "../types";
import { getColumns } from "../utility/getColumns";

function useTableColumns({
  sortState,
  setSortState,
  searchFilterState,
  setSearchFilterState,
}: {
  sortState: Sort;
  setSortState: React.Dispatch<React.SetStateAction<Sort>>;
  searchFilterState: SearchFilter;
  setSearchFilterState: React.Dispatch<React.SetStateAction<SearchFilter>>;
}) {
  const [defaultColumns, setDefaultColumns] = useState<ColumnsType<DataType>>(
    []
  );
  const [currentColumns, setCurrentColumns] = useState<ColumnsType<DataType>>(
    []
  );
  const { showingColumnsName } = useShowingColumns();

  useEffect(() => {
    setDefaultColumns(
      getColumns(
        sortState,
        searchFilterState,
        setSortState,
        setSearchFilterState
      )
    );
  }, [sortState, searchFilterState, setSortState, setSearchFilterState]);

  useEffect(() => {
    const newCurrentColumns = defaultColumns.filter((column) =>
      showingColumnsName.includes(column.dataIndex)
    );
    setCurrentColumns(newCurrentColumns);
  }, [defaultColumns, showingColumnsName]);

  return { currentColumns };
}

export default useTableColumns;
