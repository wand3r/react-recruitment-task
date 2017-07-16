import * as React from "react";
import { FileUploader } from "./file-uploader/index";
import { FizzBuzzCounter } from "./fizz-buzz/fizz-buzz-counter";
import { css } from "glamor";

export const App = () => 
  <div 
    {...css({ 
      display: "flex", 
      flexDirection: "column",
    })}>
    <div {...css({ padding: "1em"})}>
      <FizzBuzzCounter />
    </div>
    <div {...css({ padding: "1em" })}>
      <FileUploader withFilePreview={true} />
    </div>
  </div>;
