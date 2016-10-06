//navbar.js
import React from 'react';
import jump from './jumper';

export default class Nbar extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.id = "mainNav";   
    
    // method for sticky navbar
     this.checkPosition = () => {
        let offsetTop =  this.navbar.offsetTop ? this.navbar.offsetTop : this.offsetTop;
        this.offsetTop = offsetTop; 
        let yoffset = window.pageYOffset;
        let pin = () => {this.navbar.classList.add("affix");};
        let unpin = () => {this.navbar.classList.remove("affix");};
       
        let shouldPin = yoffset > offsetTop;
        if (shouldPin){
            pin();
        } else {
            unpin();
        }
        this.checkPositionEventLoop =  setTimeout(this.checkPosition, 1);
      }
  }

  jump


  componentDidMount(){
    //create poller here
    this.navbar = document.getElementById(this.id);
    this.checkPositionEventLoop =  setTimeout(this.checkPosition, 1)
  }

  componentWillUnmount(){
    //remove poller here
    clearTimeout(this.checkPositionEventLoop);
  }

  smoothScroll(event){
    event.preventDefault();
    const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2
          if(t < 1) return c / 2 * t * t + b
          t--
          return -c / 2 * (t * (t - 2) - 1) + b
    }   
    const target_id = event.target.href.split("#")[1];
    const target = document.getElementById(target_id)
    console.log(target);
    window.jump = jump;
    jump("#"+target_id, {
      duration: 1000,
      callback: undefined,
      offser: 0,
      easing: easeInOutQuad,
      a11y: false
    });
  }


  onClickCollapseHandler(event){
    const collapsable = document.getElementById("ss-navbar-collapse");
    if (collapsable.classList.contains("in")){
         collapsable.classList.remove("in");
    }else{
         collapsable.classList.add("in");
    }
   
    console.log(collapsable_id);
  }
 

 
  render() {
    return (
    <div id={this.id} class="navbar navbar-default navbar-custom">
        <div class="container" onClick={this.smoothScroll.bind(this)}>
          
            <div class="navbar-header page-scroll">
                <button type="button" onClick={this.onClickCollapseHandler.bind(this)} class="navbar-toggle " data-toggle="collapse"
                 data-target="#ss-navbar-collapse"  >
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top"></a>
            </div>

           
            <div class="collapse navbar-collapse" id="ss-navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li onClick={this.onClickCollapseHandler.bind(this)} class="page-scroll">
                        <a href="#page-top">Home</a>
                    </li>
                    <li onClick={this.onClickCollapseHandler.bind(this)} class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li onClick={this.onClickCollapseHandler.bind(this)} class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={this.onClickCollapseHandler.bind(this)} class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

    );
  }
}
