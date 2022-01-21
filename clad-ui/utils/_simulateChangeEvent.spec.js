// import fs from 'fs';
// import path from 'path';
import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';

import simulateChangeEvent from './_simulateChangeEvent';

describe('utils/simulateChangeEvent', () => {
  it('should simulate onChange event on input properly', async (done) => {
    const ref = React.createRef();
    const onChange = jest.fn((event) => {
      expect(event.target).toBe(ref.current);
      expect(event.target.value).toBe('tot');
      done();
    });

    render(<input ref={ref} onChange={onChange} value="" />);

    simulateChangeEvent(ref, 'tot');

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });

  it('should simulate onChange event on any element properly', async (done) => {
    const componentRef = React.createRef();
    const handleChange = jest.fn((event) => {
      expect(event.target).toBe(componentRef.current);
      expect(event.target.value).toBe('tot');
      done();
    });

    // custom component without <input />
    // eslint-disable-next-line react/prop-types
    const Component = ({ compRef, onChange, value }) => {
      const onClick = () => {
        onChange(simulateChangeEvent(compRef, 'tot', value));
      };
      return (
        <div ref={compRef}>
          <button type="button" onClick={onClick}>
            Chotot
          </button>
        </div>
      );
    };

    render(<Component compRef={componentRef} onChange={handleChange} value="" />);

    // to make the Component.onClick to be called which then trigger onChange
    fireEvent.click(screen.getByText('Chotot'));

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  });
});
