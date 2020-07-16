import React, { Fragment } from "react";
import { connect } from 'react-redux'
import Login from "containers/login";
import Nav from "containers/nav";
import Home from "containers/home";
import About from "containers/about";
import APOD from "containers/apod";
import { Switch, Route, withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Fragment>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/apod" exact component={APOD} />
          </Switch>
        </Fragment>
      );
  }
}

export default withRouter(connect()(App));
