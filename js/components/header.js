//header.js
import React from 'react';

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/header_amazing.png" alt="" />
            	</div>
        	</div>
        </div>
    </header>
    );
  }
}
/*
<!--                     <div class="intro-text">
                        <span class="name">amazing</span>
                        <hr class="star-light">
                        <span class="skills">E-commerce solutions</span>
                    </div>
 -->                </div>
 */