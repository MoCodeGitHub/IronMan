import React, {Component} from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}><h2>Tony Stark</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/357px-Robert_Downey%2C_Jr._2012.jpg"
        alt="avatar"
        style={{height: '250px'}}
      />
      <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> Tony Stark is a billionaire, playboy and philanthropist. He is a founding member of the Avengers Initiative and the lead designer at Stark Industries.</p>
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
                    TonyStarkIndustries5000@yahoo.com
                    </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID: IAmIronMan1
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
