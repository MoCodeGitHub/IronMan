import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor (props) {
    super (props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
      <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
      <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2016/08/17/13/50/pokemon-1600484_960_720.jpg) center / cover'}}>Find Pikachu</CardTitle>
      <CardText>
      ReactJS Excercise
      </CardText>
        <CardActions>
            <Button colored>GitHub</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>Download</Button>
        </CardActions>
      <CardMenu style={{color: '#ffff'}}>
      <IconButton name="" />
      </CardMenu>
      </Card>
)
    } else if (this.state.activeTab === 1){
        return (
          <div><h1>This is Swift</h1></div>
       )
    } else if (this.state.activeTab === 2){
        return (
          <div><h1>This is the Hyperloop Mission</h1></div>
        )
    } else if (this.state.activeTab === 3){
        return (
          <div><h1>This is the Moon Mission</h1></div>
        )
    }
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

    <section className="projects-grid">
      <Grid className="projects-grid">
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid>
    </section>
      </div>
    )
  }
}

export default Projects;
