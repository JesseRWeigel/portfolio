import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Motion, spring} from 'react-motion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Grid, Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'



class Work extends React.Component {

  state = { mouseOver: false };


  render() {

    const { mouseOver } = this.state;

    return (
      <Grid>
      <h1>Projects</h1>
      <style jsx>{`
      h1{
      margin-bottom: 15px;
      font-size: 36px;
      font-weight: 700;}
      `}</style>
      <br />

    <Row className="show-grid">
    <Motion style={{ scale: (mouseOver ? spring(1.2) : spring(1)) }}>
      {({ scale }) =>
      <Col xs={6} md={4} style={{ transform: `scale(${scale})`}}
      onMouseEnter={() => this.setState({ mouseOver: true })}
      onMouseLeave={() => this.setState({ mouseOver: false })}>
  <MuiThemeProvider>
    <Card>
      <CardMedia>
        <img src="/static/flatiron-school.jpg" />
      </CardMedia>
      <CardTitle title="Junior Dev Jobs" subtitle="CLI for finding Jr Dev Jobs in the Bay Area" />
      <CardText>
        Built a Ruby Gem that provided a CLI to Stackoverflow jobs page. The CLI is composed as an Object Oriented Ruby application. Technical Objective: good design patterns and create a collection of objects.
      </CardText>
      <CardActions>
      <Link href="https://github.com/gURLmeetsCode/dev_jobs_CLI.git"><a><FlatButton label="View on Github" /></a></Link>
      </CardActions>
    </Card>
  </MuiThemeProvider>
    </Col>
    }
  </Motion>



    <Col xs={6} md={4}>
    <MuiThemeProvider>
    <Card>
      <CardMedia>
        <img src="/static/Flatiron+School-60.jpg" />
      </CardMedia>
      <CardTitle title="Ruby CLI TicTacToe" subtitle="CLI with AI and Human Player options" />
      <CardText>
        Built a version of Tic Tac Toe with 0, 1, and 2 player modes. A 0 player game has two computer players playing against each other with no interaction from the user.
        A 1 player game is played against the computer. A 2 player game has two human players.
      </CardText>
      <CardActions>
        <Link href="https://github.com/gURLmeetsCode/ttt-with-ai-project-cb-000.git"><a><FlatButton label="View on Github" /></a></Link>
      </CardActions>
    </Card>

    </MuiThemeProvider>

    </Col>





    <Col xs={6} md={4}>
    <MuiThemeProvider>
    <Card>
      <CardMedia>
        <img src="/static/soundcloud-img.png" />
        <br />
      </CardMedia>
      <CardTitle title="SoundCloud Scraper" subtitle="Application using JS SDK " />
      <CardText>
        Built a small application using the SoundCloud public API. The goal of the application is to provide an interesting way to explore tracks via SoundCloud’s Search API. Technical Ojectives were maintainability, testing and performance.  API key has been removed from repo.
      </CardText>
      <CardActions>
      <Link href="https://github.com/gURLmeetsCode/soundCloud"><a><FlatButton label="View on Github" /></a></Link>
      </CardActions>
    </Card>
    </MuiThemeProvider>
    </Col>
    </Row>
    </Grid>

      );
    }
}




export default Work;
