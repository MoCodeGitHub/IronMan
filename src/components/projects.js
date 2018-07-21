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
      <div className="projects-grid">
      <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
      <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2016/08/17/13/50/pokemon-1600484_960_720.jpg) center / cover'}}></CardTitle>
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

      <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
      <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2016/08/17/13/50/pokemon-1600484_960_720.jpg) center / cover'}}></CardTitle>
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

      <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
      <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2016/08/17/13/50/pokemon-1600484_960_720.jpg) center / cover'}}></CardTitle>
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
</div>

)
    } else if (this.state.activeTab === 1){
        return (
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2017/03/21/00/28/steve-jobs-2160725_960_720.png) center / cover'}}>Swift</CardTitle>
          <CardText>
          Swift Project
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
    } else if (this.state.activeTab === 2){
        return (
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2016/11/21/12/26/concrete-1845046_960_720.jpg) center / cover'}}>Hyperloop</CardTitle>
          <CardText>
          HYPERLOOP Project
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
    } else if (this.state.activeTab === 3){
        return (
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '800px',background: 'url(https://cdn.pixabay.com/photo/2015/02/17/16/08/astronaut-639570_960_720.jpg) center / cover'}}>MOON MISSION</CardTitle>
          <CardText>
          Apollo Missions to the Moon
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

      <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Projects;
