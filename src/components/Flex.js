import React, {Component} from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

export default class Flex extends Component {

  render() {
    let classes = ['Flex'];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    let style = {
      flex: 1,
      position: 'relative'
    };

    if (this.props.style) {
      assign(style, this.props.style);
    }

    return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
  }
}

Flex.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};