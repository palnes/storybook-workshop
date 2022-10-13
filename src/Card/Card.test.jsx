// import dependencies
import React from 'react';

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

import { Card } from './Card';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('loads and displays greeting', async () => {
  const expectedChildren = 'hello there!';
  render(<Card data-testid="card">{expectedChildren}</Card>);

  expect(screen.getByTestId('card')).toHaveTextContent(expectedChildren);
});

// test new card creation