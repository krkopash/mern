import { render, screen, fireEvent } from '@testing-library/react';
import SimpleCounter from './counter';

describe('SimpleCounter Component', () => {
  test('renders initial counter value', () => {
    render(<SimpleCounter />);
    expect(screen.getByText(/Counter Value: 0/i)).toBeInTheDocument();
  });

  test('increments counter on button click', () => {
    render(<SimpleCounter />);
   
   
    const button = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(button);

    expect(screen.getByText(/Counter Value: 1/i)).toBeInTheDocument();
  });
});

