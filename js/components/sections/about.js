//about.js
import React from 'react';

export default class About extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="success fancy-block" id="about">
            <div class="container">
                <div class="row">
                    
                </div>
                <div class="row">
                    <div class="about_img col-lg-6">
                        <img src="img/cheaky_box.png"></img>
                    </div>
                    <div class="about_text col-lg-6">
                         <div class="col-lg-12 text-center">
                            <h2>e-commerce experts</h2>
                        </div>
                        <p>Amazing brings masses of experience in the online retail world to the table (and we won’t saw it in half)</p>
                        <p>We have developed multiple advanced bespoke websites for clients complete with custom integrations for their ERP/POS systems and any other eCommerce needs that arise. As a general rule we build our sites using the world’s leading open source CMSs: Magneto and WooCommerce, so our clients can be sure of receiving top quality results at minimal cost.</p>
                        <div class="col-lg-12">
                            <a href="#notjust" class="what_else_button">what else can you do?<i id="arrowz" class="fa fa-angle-right"></i>
                            </a>
                         </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }
}

        