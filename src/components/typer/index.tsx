import React, { useEffect, useState } from "react";

import TyperInput from "../typer-input";
import TyperText from "../typer-text";
import TyperResult from "../typer-result";

import { TYPER_CONTAINER_TEST_ID } from "../../constants/testIds";
import { randomlySelectedSentences } from "../../helper/util";
import styles from "./index.module.css";

const TyperComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [randomSentence, setRandomSentence] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);


  const reset = () => {
    const tempRandomSentence = randomlySelectedSentences();
    setRandomSentence(tempRandomSentence);
    setInputText('');
    setStartTime(null);
    setResult(0);
  };

  useEffect(() => {
    reset();
  }, []);

  const handleOnInput = (e: string) => {
    if (startTime === null) {
      setStartTime(new Date().getTime());
    }
    setInputText(e);
  };

  useEffect(() => {
    if (startTime !== null && inputText === randomSentence && result === 0) {
      const endTime = new Date().getTime();
      const elapsedTime = (endTime - startTime) / 1000;
      setResult(elapsedTime)
    }
  }, [inputText, startTime, randomSentence, result]);

  return (
    <section
      data-testid={TYPER_CONTAINER_TEST_ID}
      className={styles.typerContainer}
    >
      <TyperText inputText={inputText} randomSentence={randomSentence} />
      <TyperInput value={inputText} onChange={handleOnInput} />
      <TyperResult result={result} reset={reset} />
    </section>
  );
};

export default TyperComponent;
