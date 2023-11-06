import React from "react";
import NoDataTemplate from "../NoDataTemplate";

export const getLocale = (pageSize: number, isLoading: boolean) => ({
  emptyText: <NoDataTemplate rows={pageSize} isLoading={isLoading} />,
});
