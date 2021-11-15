import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

function App() {
  const [login, setLogin] = useState(false);
  const toggle = () => {
    setLogin(!login);
  };
  return (
    <Router>
      <div className="App">
        <NavBar toggle={toggle} login={login} />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route
            path="/userslist"
            render={(props) => <UsersList login={login} {...props} />}
          />
          <Route path="/profile/:userId">
            <Profile login={login} />
          </Route>
        </Switch>
        {/* <Route
        exact
        path="/"
        render={(props) => <Home msg="hello" {...props} />}
      /> */}
        {/* <Route path="/about/:id">
        <About msg="hello" />
      </Route>
      <Route path="/contact/:name" render={({match}) => <h3>Name:{match.params.name}</h3>} /> */}
      </div>
    </Router>
  );
}

export default App;
