import "./App.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import HomePage from "../../features/home/home";
// import SecondPage from "../../features/secondpage/second.page";
// import ThirdPage from "../../features/thirdpage/third.page";

export type FormOption = {
  label: string;
  path: string;
};

// const formOption: FormOption[] = [
//   { label: "Home", path: "/home" },
//   { label: "SegundaPagina", path: "/second" },
//   { label: "TerceraPagina", path: "/third" },
// ];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
