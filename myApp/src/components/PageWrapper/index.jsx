import AppHeader from "../header";
import Footer from "../footer";

const PageWrapper = (props) => {
  //   console.log(props);
  return (
    <div className={props.className}>
      <AppHeader />
      {props.children}
      <Footer />
    </div>
  );
};
export default PageWrapper;
