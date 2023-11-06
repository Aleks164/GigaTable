import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ColumnsType } from "antd/es/table";
import NoDataTemplate from "./NoDataTemplate";
import HeaderToolBox from "./TableHeader/HeaderToolBox";
import { getRowKey } from "./utility/getRowKey";
import { paginationInitData, pageSizeOptions } from "./utility/const";
import { getSortQueryString } from "./utility/getSortQueryString";
import { getColumns } from "./utility/getColumns";
import { getPaginationQueryString } from "./utility/getPaginationQueryString";
import { getSearchFilterQueryString } from "./utility/getSearchFilterQueryString";
import { useShowingColumns } from "~/store/useShowingColumns";
import { CustomTable } from "./TableHeader/StyledWrappers";
import {
  DataType,
  GigaTableProps,
  Pagination,
  SearchFilter,
  Sort,
} from "./types";

function GigaTable({ dataFetcher }: GigaTableProps) {
  const [data, setData] = useState<DataType[]>([]);
  const [maxPaginationPage, setMaxPaginationPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paginationState, setPaginationState] =
    useState<Pagination>(paginationInitData);
  const [sortState, setSortState] = useState<Sort>({});
  const [searchFilterState, setSearchFilterState] = useState<SearchFilter>({});
  const [defaultColumns, setDefaultColumns] = useState<ColumnsType<DataType>>(
    []
  );
  const [currentColumns, setCurrentColumns] = useState<ColumnsType<DataType>>(
    []
  );
  const { showingColumnsName } = useShowingColumns();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      const paginationQueryString = getPaginationQueryString(paginationState);
      const sortQueryString = getSortQueryString(sortState);
      const filterQueryString = getSearchFilterQueryString(searchFilterState);
      const resultQueryString = `${paginationQueryString}${sortQueryString}${filterQueryString}`;
      const { newData, maxPage } = await dataFetcher(resultQueryString);
      if (!isMounted) return;
      setData(newData);
      setMaxPaginationPage(maxPage);
      setIsLoading(false);
    };
    fetchData();
    return () => {
      isMounted = false;
      setIsLoading(false);
    };
  }, [dataFetcher, paginationState, sortState, searchFilterState]);

  useEffect(() => {
    setDefaultColumns(
      getColumns(
        sortState,
        searchFilterState,
        setSortState,
        setSearchFilterState
      )
    );
  }, [sortState, searchFilterState]);

  useEffect(() => {
    const newCurrentColumns = defaultColumns.filter((column) =>
      showingColumnsName.includes(column.dataIndex)
    );
    setCurrentColumns(newCurrentColumns);
  }, [defaultColumns, showingColumnsName]);

  const onPaginationChange = useCallback((page: number, pageSize: number) => {
    setPaginationState({
      current: page,
      pageSize,
    });
  }, []);

  const pagination = useMemo(
    () => ({
      ...paginationState,
      pageSizeOptions,
      total: maxPaginationPage * paginationState.pageSize,
      showSizeChanger: true,
      onChange: onPaginationChange,
      onShowSizeChange: onPaginationChange,
    }),
    [onPaginationChange, paginationState, maxPaginationPage]
  );

  const locale = useMemo(
    () => ({
      emptyText: (
        <NoDataTemplate rows={paginationState.pageSize} isLoading={isLoading} />
      ),
    }),
    [paginationState.pageSize, isLoading]
  );

  return (
    <>
      <HeaderToolBox
        setSearchFilterState={setSearchFilterState}
        searchFilterState={searchFilterState}
      />
      <CustomTable
        pagination={pagination}
        columns={currentColumns}
        dataSource={data}
        rowKey={getRowKey}
        locale={locale}
      />
    </>
  );
}

export default GigaTable;
