//portfolio-item.js
import React from 'react';

export default class PortfolioItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  modal_fade_in(modal_id){
    let page_top = document.getElementById("page-top");
    let modal = document.getElementById(modal_id);
    page_top.classList.add("modal-open");
    modal.style.display = "block";
    modal.classList.add("in");

  }
  onClickHandle(event){
    
    let tag_name = event.target.tagName;
    var modal_url = "not found";
    if (tag_name === "I"){
        modal_url = (event.target.parentNode).parentNode.parentNode.href;
    }
    if (tag_name === "DIV"){
      modal_url = event.target.parentNode.href;
    }
    let modal_id = modal_url.split("#")[1];
    
    this.modal_fade_in(modal_id);
  }


  // on active: 
  // #page-top  - add class modal-open (padding right 20px)
  // #portfolioModal0 - add class in set display: block
  // on dead:
  // # page-top remove class modal-open ,  right 0px;
  // #portfolioModal0 - remove class in set display: none

  render() {
  
    return (
          			<div onClick={this.onClickHandle.bind(this)} class="col-sm-3 portfolio-item">
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

				