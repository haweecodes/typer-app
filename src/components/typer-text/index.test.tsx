
import { render, screen } from '@testing-library/react';
import TyperText from './index';
import { TYPER_DISPLAY_FIELD_TEST_ID } from '../../constants/testIds';
import { randomlySelectedWords } from '../../helper/util';

describe('TyperText', () => {
  it('renders text with correct and incorrect characters', () => {
    const randomSentence = randomlySelectedWords();
    render(<TyperText inputText={randomSentence} randomSentence={randomSentence} />);

    const displayField = screen.getByTestId(TYPER_DISPLAY_FIELD_TEST_ID);
    const textContent = displayField.textContent;

    expect(textContent).toEqual(randomSentence);
    expect(displayField.querySelectorAll('.correctChar').length).toBe(randomSentence.length);
  });
});