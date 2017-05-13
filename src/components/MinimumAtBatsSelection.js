import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

class MinimumAtBatsSelection extends Component {
  static PropTypes = {
    min: PropTypes.number,
    onChanged: PropTypes.func,
  }

  static DefaultProps = {
    min: 0,
  }

  handleChange(event) {
    this.props.onChanged(parseInt(event.target.value, 0));
  }

  render() {
    return (
      <div>
        <TextField
        style={{width: 100}}
        defaultValue={this.props.min}
          floatingLabelText="Minimo PA"
           type="number" 
           min="0"
          onChange={(event)=>this.handleChange(event)}
        />
      </div>
    );
  }
}

export default MinimumAtBatsSelection;