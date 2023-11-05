import React, { useState } from "react";
import { Button, Popover } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { SearchFilterComponent } from "./SearchFilterComponent";

export const HeaderSearchFilterButton = ({
  onSearchFilter,
  hasActiveFilter,
}: {
  onSearchFilter: (value: string) => void;
  hasActiveFilter: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = (visible: boolean) => setIsOpen(visible);
  const closePopover = () => setIsOpen(false);
  return (
    <Popover
      open={isOpen}
      onOpenChange={onOpenChange}
      content={
        <SearchFilterComponent
          hasActiveFilter={hasActiveFilter}
          onSearchFilter={onSearchFilter}
          closePopover={closePopover}
        />
      }
      title="Фильтр"
      trigger="click"
    >
      <Button
        icon={<FilterOutlined />}
        style={{ color: `${hasActiveFilter ? "blue" : "unset"}` }}
      />
    </Popover>
  );
};
