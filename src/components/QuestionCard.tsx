import React from "react";

interface props {
  question: string;
  answers: string[];
  callback: any;
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
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
