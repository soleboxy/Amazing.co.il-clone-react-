//full_service.js
import React from 'react';

export default class FullService extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section class="full_service fancy-block" id="full_service">
            <div class="container">
                <div class="row">
                    
                </div>
                <div class="row">
                    <div class="about_text col-lg-6">
                         <div class="col-lg-12 text-center">
                            <h2>Full Service</h2>
                        </div>
                        <p>We’ll be there to support you at every juncture in creating your eCommerce site. From planning and branding to UI/UX. We’ll design your site in-house and carry out all stages of development, including fully comprehensive QA cycles.</p>
                        <p>Unlike many other companies we won’t abandon clients when their sites are designed; we provide professional hosting and full technical support throughout the site’s lifetime.</p>
                        <p>Amazing doesn’t just perform tricks, we put on the full magic show.</p>
                        <div class="col-lg-12">
                            <a href="#portfolio" class="what_else_button">Ok,show me some Magic!<i id="arrowz" class="fa fa-angle-right"></i>
                            </a>
                         </div>
                    </div>
                    <div class="about_img col-lg-6">
                        <img src="img/full_service.png"></img>
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }
}

      