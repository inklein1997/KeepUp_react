import { Switch, Route, Redirect } from "react-router-dom";

import Banner from "./components/Banner";

import Home from './pages/Home'
import './App.css'
function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route path="/">
          <Home />
          </Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
        <Route path="/dashboard"></Route>
        <Route path="/project"></Route>
      </Switch>
    </div>
  );
}

export default App;
