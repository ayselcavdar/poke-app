import { render, fireEvent } from "@testing-library/react";

import BackToTop from "./BackToTop";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<BackToTop />);
  const btn = queryByTitle("BackToButton");
  expect(btn).toBeTruthy();
});

describe('clickButton', () => {
    it("onClick", () => {
        const { queryByTitle } = render(<BackToTop />);
        const btn = queryByTitle("BackToButton");
        fireEvent.click(btn);
    })
})

