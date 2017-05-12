import React, {Component} from 'react';

class MinimumAtBatsSelection extends Component {
  onClickHandler(e) {
    this.props.onClickHandler(parseInt(this.refs.input.value, 0));
  }

  render() {
    return (
      <div>
        <label htmlFor="">Minimo de Apariciones al Plato &nbsp;</label>
        <input ref="input" type="number" min="0"/>
        <button onClick={(e) => this.onClickHandler()}>Filtrar</button>
      </div>
    );
  }
}

export default MinimumAtBatsSelection;