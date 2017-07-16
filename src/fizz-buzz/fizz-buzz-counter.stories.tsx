import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import { FizzBuzzCounter, FizzBuzzValue } from "./fizz-buzz-counter";

const numberProp = (i: number) => number("number", i);

storiesOf("FizzBuzz", module)
  .add("FizzBuzzCounter", () => <FizzBuzzCounter />)
  .add("FizzBuzzValue", () => <FizzBuzzValue number={numberProp(1)} />)
  .add("FizzBuzzValue with number divisible by three", () =>
    <FizzBuzzValue number={numberProp(3)} />,
  )
  .add("FizzBuzzValue with number divisible by five", () =>
    <FizzBuzzValue number={numberProp(5)} />,
  )
  .add("FizzBuzzValue with number divisible by three and five", () =>
    <FizzBuzzValue number={numberProp(15)} />,
  );
