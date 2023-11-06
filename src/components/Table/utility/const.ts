import { Pagination } from "../types";

export const paginationInitData: Pagination = {
  current: 1,
  pageSize: 10,
};

export const pageSizeOptions = [10, 20, 50];

export const defaultColumns = [
  {
    title: "Индификатор",
    dataIndex: "deviceId",
    key: "deviceId",
  },
  {
    title: "Активность",
    dataIndex: "isActive",
    key: "isActive",
    render: (isActive: boolean) => (isActive ? "Активна" : "Неактивна"),
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Количество",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Тип",
    dataIndex: "deviceType",
    key: "deviceType",
  },
  {
    title: "Компания",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Дата установки",
    dataIndex: "installationDate",
    key: "installationDate",
  },
];

export const defaultColumnsDataIndex = defaultColumns.map(
  (column) => column.dataIndex
);
