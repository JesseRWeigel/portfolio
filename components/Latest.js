import React, { Component } from 'react';
import {Grid, Row, Col, Media, Image, Button} from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'


class Lastest extends React.Component{
  render(){
    return(
      <div>
      <Grid>
          <Row className="show-grid">
          <h1> What am I working on? </h1>
            <Col md={6} mdPush={6}>
            <Media>
              <Media.Left align="top">
                <img width={64} height={64} src="/static/next-js.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Getting Started with Next.js</Media.Heading>
                <p>For those who have experienced the frustration from tooling with Webpack, I have provided resources to help in addition to suggesting an alternative, Next.js. <Link href="https://medium.com/@gURLmeetsCode/getting-started-with-webpack-2-and-next-js-a1c4d4161c1"><a>Read More</a></Link></p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/static/screenshot-vim.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>VIM, What is it and will you need it?</Media.Heading>
                <p>So maybe you have heard of VIM or maybe your have not. In any case, this blog post will cover what VIM is and whether you will need it in your development career. <Link href="http://gurlmeetscode.com/2017/04/12/vim_do_you_really_need_it/"><a>Read More</a></Link></p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/static/hackbright.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>In the beginning, there was Hackbright Academy</Media.Heading>
                <p>In this entry I discuss my journey to becoming a software developer while reflecting on my time spent in Northern California. <Link href="https://hackhersite.wordpress.com/2016/12/29/ruby-python-and-things-in-between/"><a>Read More</a></Link></p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left align="bottom">
                <img width={64} height={64} src="/static/AWS-large-2.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>AWS and Cloud Computing</Media.Heading>
                <p>What is cloud computing? Cloud computing lets you use files and applications over the Internet. Local computers no longer have to do all the heavy lifting when it comes to running applications. The network of computers that make up the cloud handles them instead. <Link href="http://gurlmeetscode.com/2017/03/24/cloud_computing_and_aws/"><a>Read More</a></Link></p>
              </Media.Body>
            </Media>
            <br />
            <h4>Check out more of my blog entries on Learn.co and Medium</h4>
            </Col>
            <Col md={6} mdPull={6}>
            <Image src="/static/100Days.png" thumbnail />
            <br />
            <br />
            <p>I recently committed to the 100 days of Code challenge. If you are unfamiliar with the challenge,
            it was created by Free Code Camp student, Alexander Kallaway. It has since grown into a coding "movement"
            amongst noobs. I thought this would be a great way to improve my technical skills and make some really cool projects.</p>
            <p>Curious to know what I will build next? Check out my twitter feed for up to the minute details. </p>
            <Link href="https://twitter.com/gURLmeetsCode"><a><Button bsStyle="primary" bsSize="xsmall">Follow @gURLmeetsCode </Button></a></Link>
            <br />
            <br />
            <p>If you are interested in participating in the challenge, the information can be found <Link href="http://www.100daysofcode.com/"><a>here.</a></Link></p>
            </Col>
          </Row>
          <style jsx>{`
            h1 {
                margin-top: 20px;
                margin-bottom: 25px;
                font-size: 36px;
                font-weight: 700;
              }
            `}</style>
        </Grid>
      </div>
    );
  }
}

export default Lastest;
