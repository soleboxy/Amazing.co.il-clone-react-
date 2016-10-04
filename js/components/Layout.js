// Layout.js

import React from 'react';
import $ from 'jquery';
import Prologue from './Prologue';
import Nbar from './nbar';
import About from './about';
import NotJust from './notjust';
import ResponsiveDesign from './responsive';
import FullService from './full_service';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';
export default class Layout extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Prologue />
        <Nbar />
        <About />
        <NotJust />
        <ResponsiveDesign />
        <FullService />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    
    );
  }

}
