import { render, screen, fireEvent } from '@testing-library/react';
import ToggleMessage from './toggle';

describe('ToggleMessage Component', () => {
  test('message is not visible initially', () => {
    render(<ToggleMessage />);

    expect(screen.queryByText(/Hello from React Testing/i)).toBeNull();
  });

  test('shows message after button click', () => {
    render(<ToggleMessage />);


    const button = screen.getByRole('button', {name: /Toggle Message/i,});

    fireEvent.click(button);

    expect(screen.getByText(/Hello from React Testing/i)).toBeInTheDocument();
  });
});
