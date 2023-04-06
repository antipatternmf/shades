import { waitFor } from '@testing-library/react';
import { withRouterAndRedux } from 'utils/withRouterAndRedux';
import App from './index';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve('hey') });
});

test('Example test', async () => {
  const { getByText } = withRouterAndRedux(<App />);

  await waitFor(() => getByText('Shades.'));

  expect(getByText('Shades.')).toBeDefined();
});
