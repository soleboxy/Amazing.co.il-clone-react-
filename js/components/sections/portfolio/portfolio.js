//portfolio.js
import React from 'react';
import PortfolioItem from './portfolio-item';
export default class portfolio extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {      
    return (
      <section id="portfolio" class="fancy-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr class="star-primary" />
                </div>
            </div>
            <div class="row">
               {
                   this.props.clients.map(
                      (client) => {
                        return <PortfolioItem id={client['id']} thumb={client['thumb']} />;
                      }

                    )
                }
            </div>
        </div>

    </section>
    );
  }
}

    