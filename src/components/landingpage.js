import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{width: '100', margin: 'auto'}} >
      <Grid className="landing-grid">
          <Cell col={12}>
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/357px-Robert_Downey%2C_Jr._2012.jpg"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
          <h1>Tony Stark / Iron Man</h1>
          <hr></hr>
          <p>Avengers | Spider Man | War Machine | Captain America | Stark Industries | ETC </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
