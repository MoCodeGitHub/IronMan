import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}><h2>Elon Musk</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg"
        alt="avatar"
        style={{height: '250px'}}
      />
      </Cell>
      <Cell col={6}>Half page</Cell>
      </Grid></div>
    )
  }
}

export default Contact;
