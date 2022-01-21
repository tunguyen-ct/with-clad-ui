import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from './Tooltip';

describe('components/Tooltip', () => {
  it('without hoverable should be close on outside click', () => {
    const Component = () => (
      <>
        <div>Dummy</div>
        <Tooltip text="Tooltip">Trigger</Tooltip>
      </>
    );

    const { getByText } = render(<Component />);
    const dummy = getByText('Dummy');
    const trigger = getByText('Trigger');
    const tooltip = getByText('Tooltip');
    expect(trigger).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();

    fireEvent.click(dummy);
    fireEvent.animationEnd(tooltip);
    expect(tooltip).not.toBeInTheDocument();
  });
});
