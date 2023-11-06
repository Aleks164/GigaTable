import { Empty, Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

const CustomEmpty = styled(Empty)`
  height: 515px;
  &.ant-empty .ant-empty-image {
    height: 80%;
  }
`;

const CustomSkeleton = styled(Skeleton)`
  height: 515px;
  &.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph > li {
    height: 28px;
  }
`;

function NoDataTemplate({
  rows,
  isLoading,
}: {
  rows: number;
  isLoading: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <CustomSkeleton active paragraph={{ rows }} />
      ) : (
        <CustomEmpty />
      )}
    </>
  );
}

export default NoDataTemplate;
