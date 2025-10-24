import TaskItem from "./taskItem";
import styles from "./todo.module.css";

const TasksList = ({ tasks }) => {
  const isEmpty = tasks.length === 0;
  return (
    <div className={styles.tasksList}>
      {isEmpty && <div className={styles.empty}>Task List is Empty</div>}

      {!isEmpty &&
        tasks.map((item) => <TaskItem key={item.id} taskItem={item} />)}
    </div>
  );
};
export default TasksList;
