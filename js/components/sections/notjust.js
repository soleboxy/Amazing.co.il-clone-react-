//notjust.js
import React from 'react';

export default class NotJust extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <section class="notjust fancy-block" id="notjust">
            <div class="container">
                <div class="row">
                    
                </div>
                <div class="row">
                    <div class="about_text col-lg-6">
                         <div class="col-lg-12 text-center">
                            <h2>And Not Just…</h2>
                        </div>
                        <p>We don’t just deal with eCommerce websites. We can conjure up custom made websites for any type or size of business. In addition to your website, we’ll develop web applications and anything else you can dream of.</p>
                        <div class="col-lg-12">
                            <a href="#responsive" class="what_else_button">respo what?<i id="arrowz" class="fa fa-angle-right"></i>
                            </a>
                         </div>
                    </div>
                    <div class="about_img col-lg-6">
                        <img src="img/notjust.png"></img>
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }
}

        