import React, { Component } from 'react';
import {Grid, Row, Col, Media, Image} from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'


class Profile extends React.Component {
  render() {
    return (
      <Grid>
      <Row className="show-grid">
      <Col md={6} mdPush={6}>
      <div>
      <h1>Natasha Kelly</h1>
      <h2 className="italic">@gURLmeetsCode</h2>
      <p>My coding journey started in 2015 with Code Academy. The platform was relatively new and I decided I wanted to be serious about learning to code. The experience created a desire to learn more and improve. I spent time at Hackbright Academy in their part time course, and I attended meetups hosted by GDI ( Girl Develop It) San Francisco Chapter. I became a sponge for all things "Tech". I was working full time at Facebook when I made the decision to enroll in the Full Stack Development program with the Flatiron School in New York. I am a testament to the fact that no journey is one direction, along the way you encounter peaks and valleys, ultimately what makes the difference is your persistance and consistency. Now I wake up every morning excited at what I can build and learn.</p>
      <style jsk>{`
          h1,
          h2 {
           margin-top: 0;
          }

          h1 {
           margin-bottom: 16px;
           font-size: 24px;
           font-weight: 700;
          }

          h2 {
           margin-bottom: 12px;
           font-size: 18px;
           font-weight: 400;
          }
          .italic{
            font-size: 14px;
            font-style: italic;
            font-weight: lighter;
          }
        `}
      </style>
      </div>
      </Col>


      <Col md={6} mdPull={6}>
      <Image src="https://preview.ibb.co/eZZZ8F/Optimized_Harvest_010_129_Natasha.jpg" responsive />
       </Col>
      </Row>
    </Grid>
    );
  }
}
  export default Profile;
