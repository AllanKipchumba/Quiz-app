import React from "react";
import { AnswerObject } from "../App";

interface props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<props> = ({
  question,
  questionNr,
  userAnswer,
  answers,
  callback,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        {" "}
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => {
          return (
            <div key={answer}>
              <button disabled={userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
