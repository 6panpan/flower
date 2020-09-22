import React from 'react';
import Recommend from './Recommend.js';
import FlowerDetails from './FlowerDetails.js';
import "../assets/css/Flower.css"

import DetailsContent from './buycar/content.js'

export default class Flower extends React.Component {
  render() {
    return (
      <div className="flo-con">
        <DetailsContent />
        <div className="flo-bot">
          <Recommend />
          <FlowerDetails />
        </div>
      </div>

    );
  }
}
