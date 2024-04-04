import { ChangeEvent } from 'react';
import { TYPER_INPUT_ELEMENT_TEST_ID } from '../../constants/testIds';
import styles from './input.module.css'

interface TyperInputProps {
  value: string;
  onChange: (e: string) => void;
}

const TyperInput = ({ value, onChange }: TyperInputProps) => <input value={value} autoFocus className={styles.typerInput} type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} data-testid={TYPER_INPUT_ELEMENT_TEST_ID} />

export default TyperInput;