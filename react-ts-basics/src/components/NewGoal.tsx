import React, { useRef, type FormEvent } from "react";

type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);  //HTMLInputElement is used to get rid of type error in goal.current!.value 
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const enteredGoal = goal.current!.value;    // means goal.current definitely has value and never be undefined
    const enteredSummary = summary.current!.value;
    e.currentTarget.reset();    // built in method in HTMLFormElement
    handleAddGoal(enteredGoal, enteredSummary)
};
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
