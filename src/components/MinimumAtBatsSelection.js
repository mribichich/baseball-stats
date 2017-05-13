import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

class MinimumAtBatsSelection extends Component {
  handleChange(event) {
    this.props.onClickHandler(parseInt(event.target.value, 0));
  }

  render() {
    return (
      <div>
        <TextField
        style={{width: 100}}
        defaultValue={0}
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