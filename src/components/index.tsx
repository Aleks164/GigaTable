import React from "react";
import GigaTable from "./Table";
import { DataType } from "./Table/types";
import { ShowingColumnsProvider } from "~/store/ShowingColumnsProvider";

const URL = "http://localhost:3001/data/";

const getLastPaginationPage = (response: Response) => {
  const linkHeader = response.headers.get("Link");
  if (!linkHeader) return 1;
  const paginationPageParams = linkHeader.match(/(?<=_page=)\d+/gm);
  if (!paginationPageParams) return 1;
  const maxPage = Math.max(
    ...paginationPageParams.map((number) => parseInt(number, 10) || 0)
  );
  return maxPage;
};

const dataFetcher = async (queryString: string) => {
  try {
    const response = await fetch(`${URL}${queryString}`);
    const maxPage = getLastPaginationPage(response);
    const newData = (await response.json()) as DataType[];
    return { newData, maxPage };
  } catch (error) {
    return { newData: [], maxPage: 1 };
  }
};

function TableImplementation() {
  return (
    <ShowingColumnsProvider>
      <GigaTable dataFetcher={dataFetcher} />
    </ShowingColumnsProvider>
  );
}

export default TableImplementation;
