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
      <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg/576px-Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg) center / cover'}}></CardTitle>
      <CardText>
      Iron Team
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
      <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg/576px-Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg) center / cover'}}></CardTitle>
      <CardText>
      Iron Team
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
      <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg/576px-Anime_Expo_2011_-_Iron_Man_and_War_Machine_%285893319658%29.jpg) center / cover'}}></CardTitle>
      <CardText>
      Iron Team
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/0/03/The_Avengers_-_Hulk_%28cropped%29.jpg) center / cover'}}></CardTitle>
          <CardText>
          Avengers Initiative
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/0/03/The_Avengers_-_Hulk_%28cropped%29.jpg) center / cover'}}></CardTitle>
          <CardText>
          Avengers Initiative
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/0/03/The_Avengers_-_Hulk_%28cropped%29.jpg) center / cover'}}></CardTitle>
          <CardText>
          Avengers Initiative
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/SDCC_2012_-_Tony_Stark_%287573764692%29.jpg/1024px-SDCC_2012_-_Tony_Stark_%287573764692%29.jpg) center / cover'}}></CardTitle>
          <CardText>

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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/SDCC_2012_-_Tony_Stark_%287573764692%29.jpg/1024px-SDCC_2012_-_Tony_Stark_%287573764692%29.jpg) center / cover'}}></CardTitle>
          <CardText>

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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/SDCC_2012_-_Tony_Stark_%287573764692%29.jpg/1024px-SDCC_2012_-_Tony_Stark_%287573764692%29.jpg) center / cover'}}></CardTitle>
          <CardText>

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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}></CardTitle>
          <CardText>
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}></CardTitle>
          <CardText>
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
          <CardTitle style={{color: '#ffff', height: '430px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_11_Launch_-_GPN-2000-000628.jpg/819px-Apollo_11_Launch_-_GPN-2000-000628.jpg) center / cover'}}></CardTitle>
          <CardText>
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
      <Tab>Iron Man & War Machine</Tab>
      <Tab>Avengers Initiative</Tab>
      <Tab>Stark Industries</Tab>
      <Tab>Secret Spider-Man Project</Tab>
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
