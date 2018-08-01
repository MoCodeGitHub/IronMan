import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
    return (
      <div><Grid>
      <Cell col={4}>
      <div style={{textAlign: 'center'}}>
      <img
        src= "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg"
        alt= "avatar"
        style={{height: '200px'}}
        />
        </div>
      </Cell>
      <Cell className="resume-right-col" col={8}>Right</Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
