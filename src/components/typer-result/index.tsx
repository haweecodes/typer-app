import { TYPER_RESET_BUTTON, TYPER_RESULT_TEXT_FIELD } from '../../constants/testIds';
import RepeatIcon from '../../icons/repeat';
import styles from './index.module.css'

interface TyperResultProps {
  result: number;
  reset: () => void;
}

const TyperResult = ({ result, reset }: TyperResultProps) => {

  return (
    <section className={styles.resultSectionLayout}>
      <div className={styles.resultText}>
        {result > 0 && <span data-testid={TYPER_RESULT_TEXT_FIELD}>{result} seconds</span>}</div>
      <button className={styles.buttonIcon} onClick={reset} data-testid={TYPER_RESET_BUTTON}>
        <RepeatIcon />
      </button>
    </section>
  )

};

export default TyperResult;