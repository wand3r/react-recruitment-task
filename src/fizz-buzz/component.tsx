import * as React from "react";
import { fizzBuzz } from "./index";
import { css } from "glamor";

const colorsMap = {
  Fizz: "yellow",
  Buzz: "blue",
  FizzBuzz: "green",
};

export const FizzBuzzValue = ({ number }: { number: number }) => {
  const fizzBuzzValue = fizzBuzz(number);
  const style = {
    color:
      typeof fizzBuzzValue === "string" ? colorsMap[fizzBuzzValue] : undefined,
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
      <div>
        <button onClick={this.increment}>Incremenet</button>
        <FizzBuzzValue number={counter} />
      </div>
    );
  }
}
