import { Button, Table } from "antd";
import styled from "styled-components";

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & span {
    margin: -4px !important;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
`;

export const SortButton = styled(Button)`
  &.ant-btn.ant-btn-icon-only {
    width: 17px;
    margin-right: 4px;
  }
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const HeaderTitle = styled.span`
  display: flex;
  flex: 1;
`;

export const HeaderToolBoxWrapper = styled.div`
  position: relative;
  top: 15px;
  left: 20px;
  z-index: 1;
  width: 80px;
  background: #f6fcfe;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  box-shadow: 0px 1px 3px 1px #828282;
`;

export const TableNameWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 40px);
  font-size: 20px;
  font-family: monospace;
  text-shadow: 1px 1px #a7a7a7;
  font-weight: 900;
`;

export const CustomTable = styled(Table)`
  tr.ant-table-row.ant-table-row-level-0:nth-child(2n-1) {
    background-color: gainsboro;
  }
  td.ant-table-cell.ant-table-cell-row-hover {
    background-color: unset !important;
    color: #4096ff;
  }
`;
