import { SearchFilter } from "../types";

export const getSearchFilterQueryString = (searchFilter: SearchFilter) => {
    const columnNameValuePairs = Object.entries(searchFilter).filter(([_, value]) => value);
    if (!columnNameValuePairs.length) {
        return "";
    }
    return `&${columnNameValuePairs.map(([columnName, value]) => `${columnName}=${value}`).join("&")}`;
};
