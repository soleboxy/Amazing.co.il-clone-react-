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
                <PortfolioItem id="portfolioModal1" thumb="img/portfolio/cabin.png" />
                <PortfolioItem id="portfolioModal2" thumb="img/portfolio/cake.png" />
                <PortfolioItem id="portfolioModal3" thumb="img/portfolio/circus.png" />
                <PortfolioItem id="portfolioModal4" thumb="img/portfolio/game.png" />
                <PortfolioItem id="portfolioModal5" thumb="img/portfolio/safe.png" />
                <PortfolioItem id="portfolioModal6" thumb="img/portfolio/submarine.png" />
            </div>
        </div>

    </section>
    );
  }
}

    