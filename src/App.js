import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
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
