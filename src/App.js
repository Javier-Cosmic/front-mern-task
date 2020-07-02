import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import ProjectsMain from './components/projects/ProjectsMain';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';

const App = () => {
  
  return (
    // Consumer para acceder a las props del project state y task state
    <ProjectState> 
      <TaskState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/crear-cuenta' component={CreateAccount}/>
            <Route exact path='/proyectos' component={ProjectsMain}/>
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
};

export default App;
