
import { render, screen } from '@testing-library/react';
import TyperText from './index';
import { TYPER_DISPLAY_FIELD_TEST_ID } from '../../constants/testIds';
import { randomlySelectedSentences } from '../../helper/util';

describe('TyperText', () => {
  it('renders text with correct and incorrect characters', () => {
    const randomSentence = randomlySelectedSentences();
    render(<TyperText inputText={randomSentence} randomSentence={randomSentence} />);

    const displayField = screen.getByTestId(TYPER_DISPLAY_FIELD_TEST_ID);
    const textContent = displayField.textContent;

    expect(textContent).toEqual(randomSentence);
    // eslint-disable-next-line testing-library/no-node-access
    expect(displayField.querySelectorAll('.correctChar').length).toBe(randomSentence.length);
  });
});