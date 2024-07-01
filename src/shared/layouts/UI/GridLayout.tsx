import React, { FC } from "react";
import "./scss/style.scss";
import { ChildrenT } from "shared/typings/types";
const GridLayout: FC<ChildrenT> = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="grid">{children}</div>
    </div>
  );
};

export default GridLayout;
