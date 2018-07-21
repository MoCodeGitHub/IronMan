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
      <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg) center / cover'}}></CardTitle>
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
      <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg) center / cover'}}></CardTitle>
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
      <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg) center / cover'}}></CardTitle>
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
          <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/5/54/Steve_Jobs.jpg) center / cover'}}>Swift</CardTitle>
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
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/5/54/Steve_Jobs.jpg) center / cover'}}>Swift</CardTitle>
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
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/5/54/Steve_Jobs.jpg) center / cover'}}>Swift</CardTitle>
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
        </div>
       )
    } else if (this.state.activeTab === 2){
        return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hyperloop_no_tube.png/1024px-Hyperloop_no_tube.png) center / cover'}}>Hyperloop</CardTitle>
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

          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hyperloop_no_tube.png/1024px-Hyperloop_no_tube.png) center / cover'}}>Hyperloop</CardTitle>
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

          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hyperloop_no_tube.png/1024px-Hyperloop_no_tube.png) center / cover'}}>Hyperloop</CardTitle>
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
       </div>
        )
    } else if (this.state.activeTab === 3){
        return (
    <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}>MOON MISSION</CardTitle>
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

          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}>MOON MISSION</CardTitle>
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

          <Card shadow={5} style={{minWidth: '1000', margin: 'auto'}}>
          <CardTitle style={{color: '#ffff', height: '500px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}>MOON MISSION</CardTitle>
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
    </div>
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
