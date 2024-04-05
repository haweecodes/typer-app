import { render, screen } from "@testing-library/react"
import TyperResult from "."
import { TYPER_RESET_BUTTON, TYPER_RESULT_TEXT_FIELD } from "../../constants/testIds";

const reset = jest.fn();

jest.clearAllMocks()

it('should not show the result section when its value is 0', () => {
  render(<TyperResult result={0} reset={reset} />)

  const element = screen.queryByTestId(TYPER_RESULT_TEXT_FIELD);
  expect(element).toBeNull();
})

it('should show the result section when its value is greater than 0', () => {
  render(<TyperResult result={12} reset={reset} />)

  const element = screen.queryByTestId(TYPER_RESULT_TEXT_FIELD);
  expect(element).not.toBeNull();
})

it('should have reset button', () => {
  render(<TyperResult result={12} reset={reset} />)

  const element = screen.getByTestId(TYPER_RESET_BUTTON);
  expect(element).not.toBeNull();
})