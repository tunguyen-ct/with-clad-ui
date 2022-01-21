import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Snack from './Snack';

describe('components/Snack', () => {
  it('should be rendered properly', () => {
    jest.useFakeTimers();

    const Component = () => {
      const [open, setOpen] = React.useState(true);
      return open && <Snack onClose={() => setOpen(false)}>message</Snack>;
    };

    const { getByText } = render(<Component />);
    const element = getByText('message');
    expect(element).toBeInTheDocument();

    act(() => jest.runAllTimers());
    fireEvent.animationEnd(element);

    expect(element).not.toBeInTheDocument();
  });
});
