import React from "react";
import GigaTable from "./Table";
import { ShowingColumnsProvider } from "~/store/ShowingColumnsProvider";
import { dataFetcher } from "./utility/dataFetcher";

function TableImplementation() {
  return (
    <ShowingColumnsProvider>
      <GigaTable dataFetcher={dataFetcher} />
    </ShowingColumnsProvider>
  );
}

export default TableImplementation;
