import { render, screen } from '@testing-library/react';
import Hello from '../src/app/components/hello';

describe('Hello i dont know why time is flying component', () => {
  it('renders the greeting i gone start  i donit even know waht is i going to donext mondey may be message see soon still not started', () => {
    render(<Hello name="Hana" />);
    expect(screen.getByText('Hello, Hana!')).toBeInTheDocument();
  });
});
