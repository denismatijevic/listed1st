import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter basename="/">
    <div>
      <NavBar />
      <Portfolio />
      <Wrapper>
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
