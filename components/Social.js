import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'

class SocialHeaderIcons extends React.Component {
  render(){
  return(
    <div id="social">
			<li><Link prefetch href="https://www.facebook.com/natasha.kelly.16"><a class="fbook"target="_blank" title="facebook"><img src="/static/official-facebook-logo.png" /></a></Link></li>
			<li><Link prefetch href="https://twitter.com/gURLmeetsCode"><a class="twitt" target="_blank" title="twitter"><img src="/static/new-twitter-logo.png" /></a></Link></li>
      <li><Link prefetch href="https://www.linkedin.com/in/natashakelly1/"><a class="linked" target="_blank" title="linkedin"><img src="/static/linkedin-logo.png" /></a></Link></li>
      <li><Link prefetch href="https://github.com/gURLmeetsCode"><a class="github" target="_blank" title="github"><img src="/static/github-logo.png" /></a></Link></li>
			<li><Link className="med" prefetch href="https://medium.com/@gURLmeetsCode"><a target="_blank" title="medium"><img src="/static/medium-logo-688.png" /></a></Link></li>
      <style jsx>{`
        #social {
          position: fixed;
          top: 200px;
          right: 1px;
          width: 30px;
          z-index: 1;
          list-style-type: none;
        }
        div{
          background-color: rgba(233, 236, 229, 0.5);
        }
          img {
            width: 30px;
	          height: 30px;
          }
          a:hover{
            box-shadow: 20px 10px 30px white;
            background-position: -80px -80px;
          }
          a:active { background-position: -80px -80px; }

    `}</style>
		</div>

    );
  }
}

export default SocialHeaderIcons;
