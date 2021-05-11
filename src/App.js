import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/pages/Register';
import NavBar from './components/atoms/NavBar';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
        <NavBar/>
        <div>
          <Switch>
          <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            
          </Switch>
        </div>
      </Router>
  );
}

export default App;
