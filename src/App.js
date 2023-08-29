// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/home/header/Header";
import HomePages from "./component/pageContent/HomePages";
import Footer from "./component/home/header/Footer";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
