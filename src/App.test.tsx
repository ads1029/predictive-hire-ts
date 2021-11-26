import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// make jest work with Typescript
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

it("should render out nav bar", () => {
  render(<App />);
  const navTitle = screen.getByText(/Display Form/i);
  expect(navTitle).toBeInTheDocument();
});

it("should render form after clicking nav button", () => {
  render(<App />);
  // const navTitle = screen.getByRole("button");
  // expect(navTitle).toBeInTheDocument();
});
