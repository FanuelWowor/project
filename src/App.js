import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login.js';
import Register from './Register.js';
import Dashboard from './Dashboard.js';
import About from './About.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;