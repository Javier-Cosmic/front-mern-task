import React, {useContext, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import ProjectsMain from './components/projects/ProjectsMain';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';
import tokenAuth from './config/token';
import PrivateRoute from './components/route/PrivateRoute';

// verificar si existe un token al refrescar la pagina
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

const App = () => {

  return (
    // Consumer para acceder a las props del project state y task state
  <AuthState>
    <ProjectState> 
      <TaskState>
        <AlertState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/crear-cuenta' component={CreateAccount}/>
                <PrivateRoute exact path='/proyectos' component={ProjectsMain}/>
              </Switch>
            </Router>
        </AlertState>
      </TaskState>
    </ProjectState>
  </AuthState>
  );
};

export default App;
