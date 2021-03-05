import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage'

it("checkMessages", () => {
    const { queryByTitle } = render(<ErrorMessage />);
    const alert = queryByTitle("ErrorMessage");
    expect(alert).toBeTruthy();
});