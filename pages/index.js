import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Header from '../components/Header';
import Work from '../components/Work';
import Background from '../components/Background';
import Connected from '../components/Connected';
import Latest from '../components/Latest';
import SocialHeaderIcons from '../components/Social';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'




export default () => (
  <div>
    <Background />
    <Header/>
    <SocialHeaderIcons />
    <Profile />
    <hr />
    <br />
    <Work />
    <Connected />
    <Latest />
    <Footer />
  </div>
)
