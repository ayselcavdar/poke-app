import { render } from "@testing-library/react";

import Loading from "./Loading";

it("checkIconRender", () => {
  const { queryByTitle } = render(<Loading />);
  const icon = queryByTitle("LoadingTitle");
  expect(icon).toBeTruthy();
});
