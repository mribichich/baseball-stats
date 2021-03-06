import React, {Component} from 'react';
import assign from 'object-assign';

export default class Layout extends Component {
  render() {
    let classes = ['Layout'];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    classes.push(this.props.type);

    let style = {
      display: 'flex',
      flex: 1
    };

    style.flexDirection = (this.props.type === 'column')
      ? 'column'
      : 'row';

    if (this.props.style) {
      assign(style, this.props.style);
    }

    return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
  }
}

Layout.defaultProps = {
  type: 'row'
};