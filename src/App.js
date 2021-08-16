import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
// import Sports from './Pages/Sports';
import Politics from './Pages/Politics'




function App() {
  return (
    
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/politics'>
          <Politics />
        </Route>
        <Route path='/signIn'>
        <SignIn />
        </Route>
      </Switch>

  );
}

export default App;
