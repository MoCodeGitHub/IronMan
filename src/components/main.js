import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Aboutme" component={Aboutme} />

  </Switch>
)

export default Main;
