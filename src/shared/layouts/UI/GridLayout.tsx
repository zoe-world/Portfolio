import React, { FC } from "react";
import { ChildrenType } from "shared/typings/types";
const GridLayout: FC<ChildrenType> = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="grid">{children}</div>
    </div>
  );
};

export default GridLayout;
