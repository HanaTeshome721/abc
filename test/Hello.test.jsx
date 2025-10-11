import { render, screen } from '@testing-library/react';
import Hello from '../src/app/components/hello';

describe('Hello component', () => {
  it('renders the greeting message', () => {
    render(<Hello name="Hana" />);
    expect(screen.getByText('Hello, Hana!')).toBeInTheDocument();
  });
});
