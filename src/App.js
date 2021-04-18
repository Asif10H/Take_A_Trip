import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home1/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AddPlace from './components/AddPlace/AddPlace';
import AddReview from './components/AddReview/AddReview';
import HomePage from './components/Home1/HomePage/HomePage';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router> 
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addPlace">
           <AddPlace></AddPlace>
          </Route>
          <Route path="/review">
          <AddReview></AddReview>
          </Route>
          <Route path="/admin">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/place/:_id">
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
