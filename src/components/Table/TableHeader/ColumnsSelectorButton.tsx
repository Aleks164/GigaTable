import React from "react";
import { Button, Popover, Tooltip } from "antd";
import { SplitCellsOutlined } from "@ant-design/icons";
import { ColumnsSelector } from "./ColumnsSelector";

function ColumnsSelectorButton() {
  return (
    <>
      <Popover
        trigger="click"
        placement="bottomRight"
        content={<ColumnsSelector />}
      >
        <Tooltip title="Выбор столбцов">
          <Button icon={<SplitCellsOutlined />} />
        </Tooltip>
      </Popover>
    </>
  );
}

export default ColumnsSelectorButton;
