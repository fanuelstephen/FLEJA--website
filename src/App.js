// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/home/header/Header";
import HomePages from "./component/pageContent/HomePages";
import Footer from "./component/home/header/Footer";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          {/* <Route path="/pages" exact component={Pages} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
