import { useState } from "react";
import TaskForm from "./taskForm";
import TasksList from "./tasksList";
import styles from "./todo.module.css";

const TodoList = () => {
  const [taskInput, setTaskInput] = useState(""); // store userinput
  const [tasks, setTasks] = useState([]); // store tasks

  return (
    <div className={styles.todoContainer}>
      <TaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        setTasks={setTasks}
      />
      <TasksList tasks={tasks} />
    </div>
  );
};
export default TodoList;
