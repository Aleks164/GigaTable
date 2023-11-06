import React from "react";
import { Select } from "antd";

export function ColumnsSelector() {
  const onChange = (value: ValueType, option: OptionType | OptionType[]) => {
    console.log(value, option);
  };
  return (
    <Select
      onChange={onChange}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
        { value: "disabled", label: "Disabled", disabled: true },
      ]}
    />
  );
}
