import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import ProjectsMain from './components/projects/ProjectsMain';

const App = () => {
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/crear-cuenta' component={CreateAccount}/>
          <Route exact path='/proyectos' component={ProjectsMain}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
