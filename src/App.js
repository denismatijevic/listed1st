import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <HashRouter basename="/">
    <div>
      <NavBar />
      <Portfolio />
      <Wrapper>
        <Route exact path="/contact" component={ContactForm} />
      </Wrapper>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
