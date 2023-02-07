import logo from "./logo.svg";
import "./App.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { AppRouter } from "../app.router/app.router";
import HomePage from "../../features/home/home";

export type FormOption = {
  label: string;
  path: string;
};

const formOption: FormOption[] = [
  { label: "Home", path: "/home" },
  { label: "SegundaPagina", path: "/second" },
  { label: "TerceraPagina", path: "/third" },
];

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
