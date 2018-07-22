import React, {Component} from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';

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
      <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> ELON MUSK is a business magnate, investor and engineer. He is the founder, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.</p>
      </Cell>
      <Cell col={6}><h2>Contact me</h2>
      <hr/>
<div className="contact-list">
      <List>
        <ListItem>
          <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>
                  (123) 555-7790
                    </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    elonmusk5000@yahoo.com
                    </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID: Martian1
                    </ListItemContent>
                </ListItem>
        </List>
        </div>
      </Cell>
      </Grid><
      /div>
    )
  }
}

export default Contact;
