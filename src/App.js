import Login from './components/login/Login/Login.js';
import Profile from './components/login/Profile/Profile.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Login/> </Route>
        <Route path="/profile"> <Profile/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
