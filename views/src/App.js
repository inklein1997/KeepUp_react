import { Switch, Route, Redirect } from "react-router-dom";

import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route path="/home"></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
        <Route path="/dashboard"></Route>
        <Route path="/project"></Route>
      </Switch>
    </div>
  );
}

export default App;
