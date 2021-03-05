import { render } from "@testing-library/react";

import Home from "./Home";

it("checkType", () => {
  const { queryByTitle } = render(<Home />);
  const homePage = queryByTitle("HomeTitle");
  expect(homePage).toBeTruthy();
});