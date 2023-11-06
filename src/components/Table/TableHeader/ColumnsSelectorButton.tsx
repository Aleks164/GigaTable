import React from "react";
import { Button, Popover } from "antd";
import { SplitCellsOutlined } from "@ant-design/icons";
import { ColumnsSelector } from "./ColumnsSelector";

function ColumnsSelectorButton() {
  return (
    <>
      <Popover content={<ColumnsSelector />}>
        <Button icon={<SplitCellsOutlined />} />
      </Popover>
    </>
  );
}

export default ColumnsSelectorButton;
