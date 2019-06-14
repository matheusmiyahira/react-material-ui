import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "./components/appBar";
import NavBar from "./components/navBar";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import Movies from "./components/movies";
import Cadastro from "./components/cadastro";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/landing-page" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
