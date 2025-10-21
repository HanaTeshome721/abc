import { render, screen } from '@testing-library/react';
import Hello from '../src/app/components/hello';

describe('Hello i dont know why time is flying component', () => {
  it('renders the greeting message see soon', () => {
    render(<Hello name="Hana" />);
    expect(screen.getByText('Hello, Hana!')).toBeInTheDocument();
  });
});
