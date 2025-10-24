import Counter from "../../components/counter";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import TodoList from "../../components/todolist";
import UserList from "../../components/userList";

const PracticePage = () => {
  return (
    <div className="practice_page">
      <AppHeader />
      <UserList />
      <Counter />
      <TodoList />
      <Footer />
    </div>
  );
};

export default PracticePage;
