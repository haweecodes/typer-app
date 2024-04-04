import { randomWords } from "../constants/randomWords";

const randomlySelectedWords = () => randomWords[Math.ceil(Math.random() * 22)];

export {randomlySelectedWords}