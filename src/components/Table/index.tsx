import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeaderToolBox from "./TableHeader/HeaderToolBox";
import useTableColumns from "./Hooks/useTableColumns";
import { getRowKey } from "./utility/getRowKey";
import { paginationInitData, pageSizeOptions } from "./utility/const";
import { getSortQueryString } from "./utility/getSortQueryString";
import { getPaginationQueryString } from "./utility/getPaginationQueryString";
import { getSearchFilterQueryString } from "./utility/getSearchFilterQueryString";
import { CustomTable } from "./TableHeader/StyledWrappers";
import { getLocale } from "./utility/getLocale";
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
  const { currentColumns } = useTableColumns({
    sortState,
    setSortState,
    searchFilterState,
    setSearchFilterState,
  });

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
        loading={isLoading}
        rowKey={getRowKey}
        locale={getLocale(paginationState.pageSize, isLoading)}
      />
    </>
  );
}

export default GigaTable;
