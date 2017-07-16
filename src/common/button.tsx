import * as React from "react";
import { css } from "glamor";

import { fontFamily } from "../theme/index";

export const style = {
  fontFamily,
  padding: "0.5em 0.75em",
  borderRadius: "0.25em",
  boxShadow: "0 0 0.2em #999999",
}

type ButtonProps = {
  background:  string,
  color: string,
  onClick?: () => void,
  icon?: JSX.Element, 
  children?: React.ReactNode,
  customStyle?: any,
}
export const Button = ({ 
  background, 
  color, 
  icon, 
  customStyle,
  children, 
  onClick,
}: ButtonProps) =>
  <label
    {...css({
      ...style,
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      cursor: "pointer",
      background,
      color,
      ...customStyle
    })}
    onClick={onClick}
  >
    <div {...css({ height: "1em" })}>
      {icon}
    </div>
    <div 
      {...css({ 
        paddingLeft: icon && "0.2em", 
        cursor: "pointer" 
      })}
    >
      {children}
    </div>
  </label>;