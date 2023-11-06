import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Table } from "antd";
import styled from "styled-components";
import NoDataTemplate from "./NoDataTemplate";
import { getRowKey } from "./utility/getRowKey";
import { paginationInitData, pageSizeOptions } from "./utility/const";
import { getSortQueryString } from "./utility/getSortQueryString";
import { getColumns } from "./utility/getColumns";
import { getPaginationQueryString } from "./utility/getPaginationQueryString";
import { getSearchFilterQueryString } from "./utility/getSearchFilterQueryString";
import {
  DataType,
  GigaTableProps,
  Pagination,
  SearchFilter,
  Sort,
} from "./types";
import HeaderToolBox from "./TableHeader/HeaderToolBox";

const CustomTable = styled(Table)`
  tr.ant-table-row.ant-table-row-level-0:nth-child(2n-1) {
    background-color: gainsboro;
  }
  td.ant-table-cell.ant-table-cell-row-hover {
    background-color: unset !important;
    color: #4096ff;
  }
`;

function GigaTable({ dataFetcher }: GigaTableProps) {
  const [data, setData] = useState<DataType[]>([]);
  const [maxPaginationPage, setMaxPaginationPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paginationState, setPaginationState] =
    useState<Pagination>(paginationInitData);
  const [sortState, setSortState] = useState<Sort>({});
  const [searchFilterState, setSearchFilterState] = useState<SearchFilter>({});

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

  const locale = useMemo(
    () => ({
      emptyText: (
        <NoDataTemplate rows={paginationState.pageSize} isLoading={isLoading} />
      ),
    }),
    [paginationState.pageSize, isLoading]
  );

  const columns = useMemo(
    () =>
      getColumns(
        sortState,
        searchFilterState,
        setSortState,
        setSearchFilterState
      ),
    [sortState, searchFilterState]
  );
  return (
    <>
      <HeaderToolBox
        setSearchFilterState={setSearchFilterState}
        searchFilterState={searchFilterState}
      />
      <CustomTable
        pagination={pagination}
        columns={columns}
        dataSource={data}
        rowKey={getRowKey}
        locale={locale}
      />
    </>
  );
}

export default GigaTable;
