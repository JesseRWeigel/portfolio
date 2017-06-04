import React, { Component } from 'react';
import Link from 'next/link'
import {Glyphicon, Grid, Col} from 'react-bootstrap'


class Footer extends React.Component{
  render(){
    return(

      <div className="content">
        <Grid>
        <hr />
        <Col md={4} mdOffset={4}>
        <footer>
          <span>Made with <Glyphicon glyph="heart" /> By Natasha Kelly</span>
        </footer>
        <p>© gURLmeetsCode 2017</p>
        </Col>
        </Grid>
       <style jsx>{`
      .content{
        color: grey;
      }
    `}</style>
    <style global jsx>{`
      body {
      }
    `}</style>
	    </div>
    );
  }
}

export default Footer;
