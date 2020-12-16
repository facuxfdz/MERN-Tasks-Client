import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Projects from './components/projects/Projects';
import StateProject from './context/projects/stateProject';
import StateTask from './context/tasks/stateTask';
import StateAlert from './context/alerts/stateAlert';

function App() {
  return (
    <StateProject>
      <StateTask>
      <StateAlert>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
      </StateAlert>
      </StateTask>
    </StateProject>
  );
}

export default App;
