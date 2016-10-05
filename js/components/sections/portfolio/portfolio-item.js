//portfolio-item.js
import React from 'react';

export default class PortfolioItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

  }

  render() {
  
    return (
      			<div class="col-sm-3 portfolio-item">
                    <a href={"#"+this.props.id} class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={this.props.thumb} class="img-responsive" alt="" />
                    </a>
                </div>
    );
  }
}

				