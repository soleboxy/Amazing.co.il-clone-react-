//navbar.js
import React from 'react';

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


  componentDidMount(){
    //create poller here
    this.navbar = document.getElementById(this.id);
    this.checkPositionEventLoop =  setTimeout(this.checkPosition, 1)
  }

  componentWillUnmount(){
    //remove poller here
    clearTimeout(this.checkPositionEventLoop);
  }



 

 
  render() {
    return (
    <div id={this.id} class="navbar navbar-default navbar-custom">
        <div class="container">
          
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top"></a>
            </div>

           
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#page-top">Home</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

    );
  }
}
