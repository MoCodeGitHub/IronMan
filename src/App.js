import React, { Component } from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
  <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="PORTFOLIO" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/">Home</Link>
              </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
