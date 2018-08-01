import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={Projects} />


  </Switch>
)

export default Main;
