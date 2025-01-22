import TaskItem from "./TaskItem";

const TASK_DUMMY = [
  {
    text: "Task 1",
    date: "12/01/2025",
  },
  {
    text: "Task 2",
    date: "12/02/2025",
  },
  {
    text: "Task 3",
    date: "12/03/2025",
  },
];

export default function TaskList() {
  return (
    <ul>
      {TASK_DUMMY.map((task) => (
        <TaskItem key={task.text} task={task} />
      ))}
    </ul>
  );
}
