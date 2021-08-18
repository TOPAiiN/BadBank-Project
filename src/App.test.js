import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateAccount from "./components/CreateAccount"

test('registers a new user', () => {
  const { getByTestId, getByText} = render(<CreateAccount />);

  const inputName   = getByTestId('name');
  const inputEmail  = getByTestId('email');
  const inputPass   = getByTestId('pass');
  

  userEvent.type(inputName, "Rob");
  userEvent.type(inputEmail, "1234@yahoo.com");
  userEvent.type(inputPass, "5656565");
  fireEvent.click(getByText('Create New Account Now'));
});
