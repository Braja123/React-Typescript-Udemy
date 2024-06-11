import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import goalsImg from "../src/assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};


function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoals: CourseGoals = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your course goals</h1>
        </Header>
        <NewGoal handleAddGoal={handleAddGoal} />
       
        <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
        
      </main>
    </>
  );
}

export default App;
