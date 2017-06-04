import React, { Component } from 'react';
import Link from 'next/link'


class Connected extends React.Component{
  render(){
    return(
      <div>
        <section className="parallax">
        <div className="parallax-inner">
        <h3>Stay Connected</h3>
        </div>
        </section>
       <style jsx>{`
      *{
        margin: 0;
        padding: 0;
        border: 0;
      }
      .parallax{
        background: url("http://i67.tinypic.com/30wv43c.jpg") repeat fixed 100%;
      }
      .parallax-inner{
        padding-top: 20%;
        padding-bottom: 20%;
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


export default Connected;
