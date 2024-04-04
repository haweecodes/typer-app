import { render, screen } from '@testing-library/react';
import { fireEvent } from "@testing-library/react";
import { TYPER_INPUT_ELEMENT_TEST_ID } from '../../constants/testIds';
import TyperInput from ".";

describe('TyperInput', () => {
  it('should call handleOnInput when typing', () => {
    const handleOnInput = jest.fn();
    const inputText = 'Hello, World!';
    render(
      <TyperInput value={inputText} onChange={handleOnInput} />
    );

    const inputElement = screen.getByTestId(TYPER_INPUT_ELEMENT_TEST_ID);
    fireEvent.change(inputElement, { target: { value: 'Test' } });

    expect(handleOnInput).toHaveBeenCalledTimes(1);
    expect(handleOnInput).toHaveBeenCalledWith('Test');
  });

  it('should have autoFocus attribute', () => {
    const handleOnInput = jest.fn();
    const inputText = 'Hello, World!';
    render(
      <TyperInput value={inputText} onChange={handleOnInput} />
    );

    const inputElement = screen.getByTestId(TYPER_INPUT_ELEMENT_TEST_ID);
    expect(inputElement).toHaveFocus();
  });
});