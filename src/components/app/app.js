import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header";
import HeaderInfo from "../header-info";
import MainPage from "../pages/main-page";
import Footer from "../footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="preview">
          <Container>
            <Header />
            <HeaderInfo />
          </Container>
        </div>
        <MainPage />
        <Footer />
      </div>
    );
  }
}
