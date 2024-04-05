import { randomSentences } from "../constants/randomSentences";

const randomlySelectedSentences = () => randomSentences[Math.ceil(Math.random() * 22)];

export {randomlySelectedSentences}