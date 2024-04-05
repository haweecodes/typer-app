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
        {result > 0 && <span>{result} seconds</span>}</div>
      <button className={styles.buttonIcon} onClick={reset}>
        <RepeatIcon />
      </button>
    </section>
  )

};

export default TyperResult;