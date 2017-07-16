import * as React from "react";
import { css } from "glamor";

export const ItemsList = ({ children } : { children: React.ReactNode }) => 
  <div {...css({ display: "flex", flexWrap: "wrap", justifyContent: "center"})}>
    {children}
  </div>