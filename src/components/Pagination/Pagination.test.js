import { render } from "@testing-library/react";

import Pagination from "./Pagination";

it("checkPagination", () => {
  const { queryByTitle } = render(<Pagination />);
  const pag = queryByTitle("PaginationTitle");
  expect(pag).toBeTruthy();
});