import { Button } from "antd";
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
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 5px;
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
