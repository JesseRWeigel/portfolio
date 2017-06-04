import React, { Component } from 'react';
import {Nav, Jumbotron, NavItem} from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Link from 'next/link'

const style = {
  margin: 12,
};


class Header extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron>
        <Nav bsStyle="pills" pullRight>
          <MuiThemeProvider>
          <div>
          <Link href="https://drive.google.com/open?id=0B70utdZQ52_XVHNIV194WWRSTTg"><a><RaisedButton label="Resume PDF" style={style} /></a></Link>
          <Link href="mailto:kellynatashav@yahoo.com"><a><RaisedButton label="Hire Me" style={style} /></a></Link>
          <Link href="https://kellz4.typeform.com/to/gJ9wtk"><a class="typeform-share button" data-mode="1" target="_blank"><RaisedButton label="Leave Feedback" style={style} /></a></Link>
          </div>
          </MuiThemeProvider>
        </Nav>
        <h1>Hello, world!</h1>
        <p>Thank you for visitng my Developer Portfolio! While you are here, be sure to check out some of my work.</p>
        </Jumbotron>
	    </div>
    );
  }
}

export default Header;
