import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarChat from "./SidebarChat";
import Chat from "./Chat.js";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Switch>
              <Sidebar />
              <Route path="/rooms/:roomId">
                <Chat />
                {/* sidebar - addNewChat is the props rendered here which was
         added in sidebarChat.js file*/}
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
          {/* chatbox */}
        </div>
      )}
    </div>
  );
}

export default App;
