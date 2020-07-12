import React from 'react';
import Login from 'containers/login'
import Nav from 'containers/nav'
import Home from 'containers/home'
import About from 'containers/about'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/about' exact component={About}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
