import { useState } from "react";
import TaskAdd from "../components/task/TaskAdd";
import TaskList from "../components/task/TaskList";
import { HeadingH3 } from "../components/ui/Heading";
import Section from "../components/ui/Section";

export default function HomePage() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(text, date, status = "to-do") {
    setTaskList((prevState) => {
      return [...prevState, { text, date, status }];
    });
  }

  function deleteTaskHandler(idTask) {
    setTaskList((prevState) => {
      const newTaskList = prevState.filter((id) => id !== idTask);
      return newTaskList;
    });
  }

  return (
    <>
      <Section>
        <TaskAdd action={addTaskHandler} />
        <HeadingH3>To Do</HeadingH3>
        <TaskList taskList={taskList} deleteTask={deleteTaskHandler} />
      </Section>
    </>
  );
}
