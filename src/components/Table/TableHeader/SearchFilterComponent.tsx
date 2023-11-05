import React, { useState } from "react";
import { Button, Input, Row } from "antd";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";

export const SearchFilterComponent = ({
  onSearchFilter,
  closePopover,
  hasActiveFilter,
}: {
  onSearchFilter: (value: string) => void;
  closePopover: () => void;
  hasActiveFilter: boolean;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchFilterSubmitted = () => {
    onSearchFilter(searchValue);
    closePopover();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        onSearchFilterSubmitted();
        break;
      case "Escape":
        closePopover();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Row wrap={false}>
        <Input
          addonBefore={<SearchOutlined />}
          value={searchValue}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
        />
        <Button
          icon={<ReloadOutlined />}
          disabled={!searchValue.length}
          onClick={() => setSearchValue("")}
        />
      </Row>
      <Row justify="end">
        <Button
          style={{ margin: "10px 5px 0px 0px " }}
          type="primary"
          disabled={!searchValue.length && !hasActiveFilter}
          onClick={onSearchFilterSubmitted}
        >
          Ok
        </Button>
      </Row>
    </>
  );
};
