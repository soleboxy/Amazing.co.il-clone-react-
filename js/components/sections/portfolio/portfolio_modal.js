//portfolio-modal.js
import React from 'react';

export default class PortfolioModal extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {img, id, title, client, date, service, description} = this.props;
    return (
      <div class="portfolio-modal modal fade" id={id} tabindex="-1" role="dialog" aria-hidden="true">
				    <div class="modal-content">
				        <div class="close-modal" data-dismiss="modal">
				            <div class="lr">
				                <div class="rl">
				                </div>
				            </div>
				        </div>
				        <div class="container">
				            <div class="row">
				                <div class="col-lg-8 col-lg-offset-2">
				                    <div class="modal-body">
				                        <h2>{title}</h2>
				                        <hr class="star-primary" />
				                        <img src={img} class="img-responsive img-centered" alt="" />
				                        <p>{description}</p>
				                        <ul class="list-inline item-details">
				                            <li>Client:
				                                <strong><a href={client['href']}>{client['name']}</a>
				                                </strong>
				                            </li>
				                            <li>Date:
				                                <strong><a href={client['href']}>{date}</a>
				                                </strong>
				                            </li>
				                            <li>Service:
				                                <strong><a href={client['href']}>{service}</a>
				                                </strong>
				                            </li>
				                        </ul>
				                        <button type="button" class="btn btn-default" data-dismiss="modal">
				                        	<i class="fa fa-times"></i> 
				                        	Close
				                        </button>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
	  </div>
    );
  }
}

