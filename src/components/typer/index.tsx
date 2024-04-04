import React, { useState } from "react";
import { TYPER_CONTAINER_TEST_ID } from "../../constants/testIds";
import TyperInput from "../typer-input";
import TyperText from "../typer-text";
import { randomlySelectedWords } from "../../helper/util";
import styles from './index.module.css';

const randomSentence = randomlySelectedWords();

const TyperComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleOnInput = (e: string) => {
    setInputText(e)
  }
  return (
    <section data-testid={TYPER_CONTAINER_TEST_ID} className={styles.typerContainer}>
      <TyperText inputText={inputText} randomSentence={randomSentence} />
      <TyperInput value={inputText} onChange={handleOnInput} />
    </section>
  )
};

export default TyperComponent;