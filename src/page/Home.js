import { useState } from "react";
import TaskAdd from "../components/task/TaskAdd";
import TaskList from "../components/task/TaskList";
import { HeadingH3 } from "../components/ui/Heading";
import Section from "../components/ui/Section";

export default function HomePage() {
  function addTaskHandler(text, date, status = "to-do") {
    setTaskList((prevState) => {
      return [...prevState, { text, date, status }];
    });
  }

  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Section>
        <TaskAdd action={addTaskHandler} />
        <HeadingH3>To Do</HeadingH3>
        <TaskList taskList={taskList} />
      </Section>
    </>
  );
}
