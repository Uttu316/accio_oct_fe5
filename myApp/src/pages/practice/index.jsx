import Counter from "../../components/counter";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import StopWatch from "../../components/stopWatch";
import TodoList from "../../components/todolist";
import UserList from "../../components/userList";

const PracticePage = () => {
  return (
    <div className="practice_page">
      <AppHeader />
      <UserList />
      <Counter />
      <TodoList />
      <StopWatch />
      <Footer />
    </div>
  );
};

export default PracticePage;
