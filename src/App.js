import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Tugas from './components/pages/Update';
import NavBar from './components/atoms/NavBar';

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
            <Route exact path="/Tugas">
              <Tugas />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
