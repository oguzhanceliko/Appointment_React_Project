import './App.css';
import React from "react";
import Create from "./components/Appointment/Create"
import Read from "./components/Appointment/Read"
import Update from "./components/Appointment/Update"
import Login from "./components/Login/Login"
import SignUp from "./components/Signup/SignUp"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="main">
          <PrivateRoute exact path="/" component={Read} />
          <PrivateRoute exact path="/create" component={Create} />
          <PrivateRoute exact path="/update" component={Update} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
