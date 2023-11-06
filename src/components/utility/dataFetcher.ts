import { DataType } from "../Table/types";
import { getLastPaginationPage } from "./getLastPaginationPage";

const URL = "http://localhost:3001/data/";

export const dataFetcher = async (queryString: string) => {
  try {
    const response = await fetch(`${URL}${queryString}`);
    const maxPage = getLastPaginationPage(response);
    const newData = (await response.json()) as DataType[];
    return { newData, maxPage };
  } catch (error) {
    return { newData: [], maxPage: 1 };
  }
};
