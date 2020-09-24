import React from 'react';
import Recommend from './Recommend.js';
import FlowerDetails from './FlowerDetails.js';
import "../assets/css/Flower.css"

import DetailsContent from './buycar/content.js'

export default class Flower extends React.Component {
  constructor(props) {
    super();
    this.state = {
        
    };
    console.log(props);
};
  render() {
    console.log(this.props.location.query)
    return (
      <div className="flo-con">
        {/*  history={this.props.history} */}
        <DetailsContent flower_id={this.props.location.query} />
        <div className="flo-bot">
          <Recommend flower_id={this.props.location.query} />
          <FlowerDetails flower_id={this.props.location.query} />
        </div>
      </div>

    );
  }
}
