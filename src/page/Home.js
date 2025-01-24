import { useState } from "react";
import TaskAdd from "../components/task/TaskAdd";
import TaskList from "../components/task/TaskList";
import { HeadingH3 } from "../components/ui/Heading";
import Section from "../components/ui/Section";

export default function HomePage() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(text, date, status = "to-do") {
    setTaskList((prevState) => {
      const id = prevState.length;
      return [...prevState, { id, text, date, status }];
    });
  }

  function deleteTaskHandler(idTask) {
    setTaskList((prevState) => {
      const newTaskList = prevState.filter((task) => task.id !== idTask);
      return newTaskList;
    });
  }

  function completeTaskHandler(idTask) {
    setTaskList((prevState) => {
      return prevState.map((task) =>
        task.id === idTask ? { ...task, status: "complete" } : task
      );
    });
  }

  let taskIsNotNull = true;
  if (taskList.length > 0) {
    taskIsNotNull = false;
  }

  return (
    <>
      <Section>
        <TaskAdd action={addTaskHandler} />
        {taskIsNotNull && (
          <p>
            You currently have no tasks. Time to add something to your list!
          </p>
        )}
        {!taskIsNotNull && (
          <>
            <HeadingH3>To Do</HeadingH3>
            <TaskList
              taskList={taskList}
              deleteTask={deleteTaskHandler}
              completeTaskAction={completeTaskHandler}
            />
          </>
        )}
      </Section>
    </>
  );
}
