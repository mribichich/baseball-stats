import React, {Component} from 'react';

class MinimumAtBatsSelection extends Component {
  onClickHandler(e) {
    this
      .props
      .onClickHandler(parseInt(this.refs.input.value, 0));
  }

  render() {
    return (
      <div>
        <input ref="input" type="number" min="0"/>
        <button onClick={(e) => this.onClickHandler()}>Filtrar</button>
      </div>
    );
  }
}

export default MinimumAtBatsSelection;