import "./App.css";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import UserCard from "./components/userCard";
function App() {
  const getName = () => {
    let fname = "Utkarsh";

    let lname = "Gupta";

    let fullName = fname + " " + lname;
    return fullName;
  };

  const getUser = () => {
    return {
      age: 20,
      city: "Agra",
    };
  };

  const isVisible = false;

  const isEven = false;

  return (
    <div className="learingPageContainer">
      <AppHeader />
      <h1 className="heading">Welcome to React</h1>
      <UserCard />

      {2 + 2}
      {"ABC" + "ew2323" + 2323}
      {getName()}
      {isVisible && (
        <div>
          <p>Hello I am a Tag</p>
        </div>
      )}
      <ul>{[<li>A</li>, <li>B</li>, <li>C</li>, <li>D</li>]}</ul>

      {getUser().age >= 22 && (
        <h3>
          Age:{getUser().age}|City: {getUser().city}
        </h3>
      )}
      <h4>{isEven ? "Number is even" : "Number is odd"}</h4>

      <AppFooter />
    </div>
  );
}

export default App;
