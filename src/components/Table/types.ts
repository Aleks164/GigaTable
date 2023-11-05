export interface DataType {
    deviceId: string;
    isActive: boolean;
    price: number;
    quantity: number;
    deviceType: string;
    company: string;
    installationDate: string;
}

export interface Pagination {
    current: number;
    pageSize: number;
}

export interface Sort {
    columnName?: string;
    direction?: SortDirection;
}

type ColumnName = string;
type FilterValue = string;

export type SearchFilter = Record<ColumnName, FilterValue>;

export type SortDirection = "asc" | "desc";

export interface FetchedDataResponse {
    newData: DataType[];
    maxPage: number;
}

export interface GigaTableProps {
    dataFetcher: (queryString?: string) => Promise<FetchedDataResponse>;
}

export interface HeaderItem {
    title: string;
    dataIndex: string;
    sortDirection?: SortDirection;
    searchFilterState: SearchFilter;
    setSortState: React.Dispatch<React.SetStateAction<Sort>>,
    setSearchFilterState: React.Dispatch<React.SetStateAction<SearchFilter>>
}