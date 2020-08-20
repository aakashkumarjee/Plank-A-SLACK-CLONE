import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
import {useStateValue} from './StateProvider';
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{user}, dispatch] = useStateValue(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div>
            <Header />
            <div className="app-body">
              {/*SideBar*/}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
