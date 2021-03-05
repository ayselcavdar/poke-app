import { render } from "@testing-library/react";

import Footer from "./Footer";

it("checkIconRender", () => {
  const { queryByTitle } = render(<Footer />);
  const comp = queryByTitle("FooterTitle");
  expect(comp).toBeTruthy();
});

