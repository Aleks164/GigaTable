import { DataType } from "../types";

export const getRowKey = (record: DataType) => record.deviceId;
