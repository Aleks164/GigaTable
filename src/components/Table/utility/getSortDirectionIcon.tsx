import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { SortWrapper } from "../TableHeader/StyledWrappers";
import { SortDirection } from "../types";

export const getSortDirectionIcon = (
  sortDirection: SortDirection | undefined
) => {
  switch (sortDirection) {
    case "asc":
      return <CaretDownOutlined style={{ color: "#0958d9" }} />;
    case "desc":
      return <CaretUpOutlined style={{ color: "#0958d9" }} />;
    default:
      return (
        <SortWrapper>
          <CaretUpOutlined /> <CaretDownOutlined />
        </SortWrapper>
      );
  }
};
