import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from ".";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});
test("Should render <a> tag", () => {
  const { container } = render(
    <Router>
      <Button type='link' isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href='' type='link'></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
test("should render <a> componen", () => {
  const { container } = render(<button type='link' isExternal></button>);
  expect(container.querySelector("a"));
});
