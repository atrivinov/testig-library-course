import { logRoles, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // debo obtener el boton y checkbox
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: 'Change to red'});

  fireEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
