import { Pagination } from "../types";

export const getPaginationQueryString = (pagination: Pagination) => {
    return `?_page=${pagination.current}&_limit=${pagination.pageSize}`;
};
