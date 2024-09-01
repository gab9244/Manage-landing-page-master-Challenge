// import { Container } from "@mui/material";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Main } from "./Main";
import { Reviews } from "./Reviews";
import { Simplify } from "./Simplify";
export const App = () => {
  return (
    <>
      <>
        <Header />
        <Main />
        <About />
        <Reviews />
      </>
      <Simplify />
      <Contact />
    </>
  );
};

