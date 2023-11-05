import React from "react";
import { ColumnsType } from "antd/es/table";
import HeaderItem from "../TableHeader";
import { DataType, SearchFilter, Sort } from "../types";
import { defaultColumns } from "./const";

export const getColumns: (
  sortState: Sort,
  searchFilterState: SearchFilter,
  setSortState: React.Dispatch<React.SetStateAction<Sort>>,
  setSearchFilterState: React.Dispatch<React.SetStateAction<SearchFilter>>
) => ColumnsType<DataType> = (
  sortState,
  searchFilterState,
  setSortState,
  setSearchFilterState
) =>
  defaultColumns.map((column) => ({
    ...column,
    title: (
      <HeaderItem
        sortDirection={
          sortState.columnName === column.dataIndex
            ? sortState.direction
            : undefined
        }
        title={column.title}
        dataIndex={column.dataIndex}
        setSortState={setSortState}
        searchFilterState={searchFilterState}
        setSearchFilterState={setSearchFilterState}
      />
    ),
  }));
