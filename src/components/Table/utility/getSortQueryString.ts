import { Sort } from "../types";

export const getSortQueryString = (sort: Sort) => {
    if (!sort.columnName || !sort.direction) {
        return "";
    }
    return `&_sort=${sort.columnName}&_order=${sort.direction}`;
};
