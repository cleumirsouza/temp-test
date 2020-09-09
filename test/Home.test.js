import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/pages/home/Home';

test('Must return TRUE', () => {
  const { home } = render(<Home />);
  expect(home).toBe(true);
});
