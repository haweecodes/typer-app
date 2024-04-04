import { render, screen } from '@testing-library/react';
import Typer from './index';
import { TYPER_CONTAINER_TEST_ID } from '../../constants/testIds';

test('renders typer component with its container', () => {
  render(<Typer />);
  const typerContainer = screen.getByTestId(TYPER_CONTAINER_TEST_ID);
  expect(typerContainer).toBeInTheDocument();
});