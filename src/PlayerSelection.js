import React, {Component} from 'react';

class PlayerSelection extends Component {
  handleSelect(e) {
    this
      .props
      .handleSelect(parseInt(e.target.value, 0));
  }

  render() {
    return (
      <div>
        <select onChange={(a, b) => this.handleSelect(a, b)}>
          <option value="">--</option>
          {this
            .props
            .players
            .map(m => (
              <option key={m.number} value={m.number}>{m.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

export default PlayerSelection;