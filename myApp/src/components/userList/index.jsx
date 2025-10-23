import { USERS } from "../../data/userData";
import UserCard from "../userCard";
import styles from "./userList.module.css";

const UserList = () => {
  return (
    <div className={`${styles.user_list} ${styles.text}`}>
      {USERS.map((item, index) => (
        <UserCard key={item.id} user={item} index={index} />
      ))}
    </div>
  );
};
export default UserList;
