import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "../pages/main-page";
import OurCoffee from "../pages/our-coffee";
import ForYourPleasure from "../pages/for-your-pleasure";
import ItemPage from "../pages/item-page";
import Footer from "../footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={MainPage} />
          <Route path="/our-coffee" component={OurCoffee} />
          <Route path="/for-your-pleasure" component={ForYourPleasure} />
          <Route path="/item-page" component={ItemPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
