import { useMemo } from 'react';
import { TYPER_DISPLAY_FIELD_TEST_ID } from '../../constants/testIds';
import styles from './text.module.css';

interface TyperTextProps {
  inputText: string;
  randomSentence: string;
}

const TyperText = ({ inputText, randomSentence }: TyperTextProps) => {

  const renderText = useMemo(() => {
    const splitText = randomSentence.split('');
    const splitInput = inputText.split('');

    return splitText.map((char: string, index: number) => {
      const correctCharacter = splitText[index];
      const inputCharacter = splitInput[index];

      const charClassName =
        correctCharacter === inputCharacter ? styles.correctChar : styles.textChar;

      return (
        <span key={`${char}-${index}`} className={charClassName}>
          {char}
        </span>
      );
    });
  }, [inputText, randomSentence]);
  return <section className={styles.typerText} data-testid={TYPER_DISPLAY_FIELD_TEST_ID}>
    {renderText}
  </section>
}

export default TyperText;