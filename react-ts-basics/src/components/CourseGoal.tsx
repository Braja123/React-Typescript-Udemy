import React, { type PropsWithChildren, type ReactNode } from "react";

interface CourseGoalProps {title: string, children: ReactNode, id: number; handleDeleteGoal: (id: number) => void};  //OR
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => { //OR
const CourseGoal = ({ title, children, id, handleDeleteGoal }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => handleDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
