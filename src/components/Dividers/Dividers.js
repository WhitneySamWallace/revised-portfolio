import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './Dividers.css';

class Dividers extends React.Component {

  render() {
    configureAnchors({offset: -68, scrollDuration: 1000})

    return (
      <div className={this.props.className}>
        <div className="divider-text">
          <ScrollableAnchor id={`${this.props.id}`}>
            <h2 className={`${this.props.title}-title`}>{this.props.title}</h2>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default Dividers;