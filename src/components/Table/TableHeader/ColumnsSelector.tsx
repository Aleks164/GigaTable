import React from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import styled from "styled-components";
import { useShowingColumns } from "~/store/useShowingColumns";
import { defaultColumns } from "../utility/const";

const CheckboxGroup = styled(Checkbox.Group)`
  &.ant-checkbox-group {
    display: grid;
  }
`;

export function ColumnsSelector() {
  const { showingColumnsName, setShowingColumnsName } = useShowingColumns();
  const onChange = (checkedValue: CheckboxValueType[]) => {
    setShowingColumnsName(checkedValue as string[]);
  };

  return (
    <CheckboxGroup onChange={onChange} value={showingColumnsName}>
      {defaultColumns.map(({ dataIndex, title }) => (
        <Checkbox key={`checkbox_group_${dataIndex}`} value={dataIndex}>
          {title}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
