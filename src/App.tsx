import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" render={() => <HomePage />} />
        <Route path="/users" render={() => <UsersPage />} />
      </Switch>
    </div>
  );
};

export default App;
