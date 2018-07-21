import React, {Component} from 'react';
import { Tabs, Tab} from 'react-mdl';

class Projects extends Component {
  constructor (props) {
    super (props);
    this.state = { activeTab: 0};
  }
  render() {
    return (
      <div className = "Category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>Swift</Tab>
      <Tab>Hyperloop</Tab>
      <Tab>Moon Mission</Tab>
      </Tabs>
      </div>
    )
  }
}

export default Projects;
