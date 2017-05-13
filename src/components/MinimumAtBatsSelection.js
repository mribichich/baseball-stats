import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MinimumAtBatsSelection extends Component {
  onClickHandler(e) {
    this.props.onClickHandler(parseInt(this.refs.input.value, 0));
  }

  render() {
    return (
      <div>
        {/*<label htmlFor="">Minimo de Apariciones al Plato &nbsp;</label>
        <input ref="input" type="number" min="0"/>
        <button onClick={(e) => this.onClickHandler()}>Filtrar</button>*/}

        <TextField
          hintText="Hint Text"
          floatingLabelText="Minimo PA"
           type="number" 
           min="0"
           ref="input"
        />
         <RaisedButton label="Filtrar"  onClick={(e) => this.onClickHandler()} />
      </div>
    );
  }
}

export default MinimumAtBatsSelection;