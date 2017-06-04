import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link'

// https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg
// http://i67.tinypic.com/30wv43c.jpg
class Background extends React.Component{
  render(){
    return(
      <div>
        <section className="parallax">
        <div className="parallax-inner">
        <h3>Natasha Kelly || Full Stack Developer</h3>
        </div>
        </section>
       <style jsx>{`
      *{
        margin: 0;
        padding: 0;
        border: 0;
      }
      .parallax{
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg") repeat fixed 100%;
      }
      .parallax-inner{
        padding-top: 21%;
        padding-bottom: 21%;
      }
      h3{
        color: white;
        text-align: center;
        letter-spacing: 1%;
        font-size: 250%;
        font-weight: lighter;
        text-shadow: .5px .5px grey;
      }
    `}</style>
	    </div>
    );
  }
}

export default Background;
