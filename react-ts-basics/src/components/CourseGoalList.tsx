import React, { ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoals as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  handleDeleteGoal: (id: number) => void
};

const CourseGoalList = ({ goals,handleDeleteGoal }: CourseGoalListProps) => {
  if(goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>
  }

  let warningBox: ReactNode;

  if(goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="medium">You are collecting a lot of goals. Don't put too much on your plate!</InfoBox>
  }
  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} handleDeleteGoal={handleDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
};

export default CourseGoalList;
