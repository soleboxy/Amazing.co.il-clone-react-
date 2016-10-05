//responsive.js
import React from 'react';
        
        export default class ResponsiveDesign extends React.Component {
          static propTypes = {
            name: React.PropTypes.string,
          };
        
          constructor(props) {
            super(props);
          }
        
          render() {
            return (
             <section class="responsive_design fancy-block" id="responsive">
	            <div class="container">
	                <div class="row">
	                    
	                </div>
	                <div class="row">
	                    <div class="about_img col-lg-6">
	                        <img src="img/responsive_design.png"></img>
	                    </div>
	                    <div class="about_text col-lg-6">
	                         <div class="col-lg-12 text-center">
	                            <h2>Responsive Design</h2>
	                        </div>
	                        <p>Now more than 40% of internet users regularly access the internet from their mobile devices and are increasingly performing transactions without using a desktop computer.</p>
	                        <p>Because of this we design our sites to be fully compatible with all platforms: desktops, smartphones and tablet devices. You’ll find our designs to be so completely responsive that it almost looks like magic.</p>
	                        <div class="col-lg-12">
	                            <a href="#full_service" class="what_else_button">Got it! Anything else?<i id="arrowz" class="fa fa-angle-right"></i>
	                            </a>
	                         </div>
	                    </div>
	                    
	                </div>
	            </div>
        	</section>
            );
          }
        }
               