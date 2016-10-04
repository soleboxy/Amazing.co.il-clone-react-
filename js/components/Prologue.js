// Prologue.js
import React from 'react';

export default class Prologue extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row first-fancy-block">
        <div class="motto col-lg-12">
            <div class="centercol col-lg-10">
                <div class="lbox col-lg-4">
                    <img src="img/wiz_left.png" alt="" />
                </div>
                <div class="mbox col-lg-4">
                    <img class="motto-img col-lg-12" src="img/motto.png" alt="" />

                    <p class="disclaimer col-lg-12">
                        Thanks to the full range of services we provide, including design, development and hosting of eCommerce websites,our clients are always spellbound by the fantastic results we achieve.
                    </p> 
                </div>
                <div class="rbox col-lg-4">
                    <img src="img/wiz_right.png" alt="" />
                </div>
                
            </div>
        </div>
    </div>
    );
  }
}
