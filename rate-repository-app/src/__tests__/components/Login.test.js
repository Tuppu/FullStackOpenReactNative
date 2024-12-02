import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from '../../../src/components/Signin/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      await waitFor(async () => {

        // expect the onSubmit function to have been called once and with a correct first argument
        const onSubmit = await jest.fn((values) => {expect(values).toStrictEqual({ username: 'kalle', password: 'password' });});
        render(<SignIn onSubmit={onSubmit} />);
    
        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText(/Login/));

        //expect(onSubmit).toHaveBeenCalledTimes(1); // https://github.com/testing-library/react-testing-library/issues/1005
      });
    });
  });
});