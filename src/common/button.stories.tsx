import * as React from "react";
import { css } from "glamor";
import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { Button } from "./button";
import { OpenFolderIcon } from "./icons";

const buttonColor = () => color("color", "white");
const buttonBackground = () => color("background", "#43af3f") 
const label = () => text("label", "Sample Button") 

storiesOf("Buttons", module)
  .add("Button with/without icon", () => 
    <div {...css({ display: "flex" })}>    
      <Button
        color={buttonColor()} 
        background={buttonBackground()}
        onClick={action("Button cliked!")}
        customStyle={{marginRight: "0.5em"}}
      >
        {label()}
      </Button>
      <Button
        color={buttonColor()} 
        background={buttonBackground()}
        onClick={action("Button cliked!")}
        icon={<OpenFolderIcon color={buttonColor()} />}
      >
        {label()}      
      </Button>
    </div>
  );
