import "./header.css";
const AppHeader = () => {
  return (
    <header className="headerContainer">
      <img className="logo" src="vite.svg" />
      <nav className="navBar">
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default AppHeader;
