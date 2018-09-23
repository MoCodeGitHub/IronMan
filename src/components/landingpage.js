import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{width: '100', margin: 'auto'}} >
      <Grid className="landing-grid">
          <Cell col={12}>
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
          <h1>Elon Musk</h1>
          <hr></hr>
          <p>SpaceX | Hyperloop | Mars Mission | Solar City | Te$la | Boring Company | ETC </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
