// Layout.js

import React from 'react';
import Header from './header'
import Prologue from './sections/Prologue';
import Nbar from './nbar';
import About from './sections/about';
import NotJust from './sections/notjust';
import ResponsiveDesign from './sections/responsive';
import FullService from './sections/full_service';
import Portfolio from './sections/portfolio/portfolio';
import PortfolioModals from './sections/portfolio/modals';
import Contact from './sections/contact';
import Footer from './footer';
import Scripts from './scripts'


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
        <Header />
        <Prologue />
        <Nbar />
        <About />
        <NotJust />
        <ResponsiveDesign />
        <FullService />
        <Portfolio />
        <Contact />
        <Footer />
        <PortfolioModals />
        <Scripts />
      </div>
    
    );
  }

}
