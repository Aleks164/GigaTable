import React, { useState } from "react";
import { ShowingColumnsContext } from "./ShowingColumnsContext";
import { defaultColumnsDataIndex } from "~/components/Table/utility/const";

export const ShowingColumnsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [showingColumnsName, setShowingColumnsName] = useState<string[]>(
    defaultColumnsDataIndex
  );

  const showingColumnsKit = {
    showingColumnsName,
    setShowingColumnsName,
  };

  return (
    <ShowingColumnsContext.Provider value={showingColumnsKit}>
      {children}
    </ShowingColumnsContext.Provider>
  );
};
