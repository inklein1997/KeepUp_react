import { Switch, Route, Redirect } from "react-router-dom";

import Banner from "./components/Banner";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project"

import "./App.css";
function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
