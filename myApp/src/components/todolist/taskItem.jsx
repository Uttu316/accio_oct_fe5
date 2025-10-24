import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";
import styles from "./todo.module.css";

const TaskItem = ({ taskItem }) => {
  const { task } = taskItem;
  return (
    <div className={styles.taskItem}>
      <p className={styles.taskText}>{task}</p>
      <div className={styles.todoItemActions}>
        <button className={styles.editBtn}>
          <EditIcon />
        </button>
        <button className={styles.dltbtn}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
