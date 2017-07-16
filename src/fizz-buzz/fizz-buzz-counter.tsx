import * as React from "react";
import { css } from "glamor";

import { fizzBuzz } from "./index";
import { Button } from "../common/button";

const colorsMap = {
  Fizz: "yellow",
  Buzz: "blue",
  FizzBuzz: "green",
};

export const FizzBuzzValue = ({ number }: { number: number }) => {
  const fizzBuzzValue = fizzBuzz(number);
  const style = {
    color: typeof fizzBuzzValue === "string" 
      ? colorsMap[fizzBuzzValue] 
      : undefined,
    padding: "0.5em",
  };
  return (
    <span {...css(style)}>
      {fizzBuzzValue}
    </span>
  );
};

export class FizzBuzzCounter extends React.Component<{}, { counter: number }> {
  
  state = {
    counter: 1,
  };

  increment = () =>
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));

  render() {
    const { counter } = this.state;
    return (
      <div 
        {...css({
          display: "flex", 
          alignItems: "center"
        })}
      >
        <Button 
          color="white" 
          background="#43af3f" 
          onClick={this.increment}
        >
          Increment
        </Button>
        <div>
          <FizzBuzzValue number={counter} />
        </div>
      </div>
    );
  }
}
