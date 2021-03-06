import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Projects from './components/projects/Projects';
import StateProject from './context/projects/stateProject';
import StateTask from './context/tasks/stateTask';
import StateAlert from './context/alerts/stateAlert';
import StateAuth from './context/auth/stateAuth';
import PrivateRoute from './components/routes/privateRoute';

function App() {
  return (
    <StateProject>
      <StateTask>
        <StateAlert>
          <StateAuth>
            <Router>
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </StateAuth>
        </StateAlert>
      </StateTask>
    </StateProject>
  );
}

export default App;
