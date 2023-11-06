import { SearchFilter } from "../types";

const getSearchFilterValue = (columnName: string, value: string) => {
  if (columnName === "isActive") {
    if (value === "Активна") return true;
    else if (value === "Неактивна") return false;
    return value;
  }
  return value;
};

export const getSearchFilterQueryString = (searchFilter: SearchFilter) => {
  const columnNameValuePairs = Object.entries(searchFilter).filter(
    ([_, value]) => value
  );
  if (!columnNameValuePairs.length) {
    return "";
  }
  return `&${columnNameValuePairs
    .map(
      ([columnName, value]) =>
        `${columnName}=${getSearchFilterValue(columnName, value)}`
    )
    .join("&")}`;
};
