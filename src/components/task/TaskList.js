import TaskItem from "./TaskItem";

export default function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem key={task.text} task={task} />
      ))}
    </ul>
  );
}
