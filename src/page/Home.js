import TaskAdd from "../components/task/TaskAdd";
import TaskList from "../components/task/TaskList";
import { HeadingH3 } from "../components/ui/Heading";
import Section from "../components/ui/Section";

const TASK_DUMMY = [
  {
    text: "Task 1",
    date: "12/01/2025",
    status: "to-do",
  },
  {
    text: "Task 2",
    date: "12/02/2025",
    status: "to-do",
  },
  {
    text: "Task 3",
    date: "12/03/2025",
    status: "to-do",
  },
];

export default function HomePage() {
  return (
    <>
      <Section>
        <TaskAdd />
        <HeadingH3>To Do</HeadingH3>
        <TaskList taskList={TASK_DUMMY} />
      </Section>
    </>
  );
}
