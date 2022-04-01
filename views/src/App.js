import { useContext, useEffect } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

import Banner from "./components/Banner";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";

import { UserContext } from "./store/user-context";

import "./App.css";
function App() {
  const [user, setUser] = useContext(UserContext);

  
  let creds = JSON.parse(localStorage.getItem("credentials"));



  useEffect(()=>{
    if (creds) {
      setUser(creds);
    }
  }, [])
  

  return (
    <div className="App">
      <Banner />
      {!creds ? (
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
