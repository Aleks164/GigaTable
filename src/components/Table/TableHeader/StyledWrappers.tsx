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
