import Counter from "../../components/counter";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import PageWrapper from "../../components/PageWrapper";
import StopWatch from "../../components/stopWatch";
import TodoList from "../../components/todolist";
import UserList from "../../components/userList";

const PracticePage = () => {
  return (
    <PageWrapper className="practice_page">
      <UserList />
      <Counter />
      <TodoList />
      <StopWatch />
    </PageWrapper>
  );
};

export default PracticePage;
