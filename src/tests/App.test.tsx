import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { App } from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
