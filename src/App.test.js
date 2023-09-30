import { logRoles, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('It chhanges the state depending on the event', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorButton = screen.getByRole('button', { name: 'Change to red' });

  fireEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
