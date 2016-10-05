//modals.js
  import React from 'react';
  import PortfolioModal from './portfolio_modal';

  
  export default class Modals extends React.Component {
    static propTypes = {
      name: React.PropTypes.string,
    };
  
    constructor(props) {
      super(props);
    }
  
    render() {
      
      return (
			<div class="modals">
				{
					this.props.clients.map((client) => {
						return <PortfolioModal {...client} />;
					})
				}
			</div>
      );
    }
  }
  