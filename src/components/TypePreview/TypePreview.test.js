import { render } from "@testing-library/react";

import TypePreview from "./TypePreview";

it("checkType", () => {
  const { queryByTitle } = render(<TypePreview />);
  const type = queryByTitle("TypePreviewTitle");
  expect(type).toBeTruthy();
});