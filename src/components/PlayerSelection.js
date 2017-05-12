import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class PlayerSelection extends Component {  
  render() {
    return (
     <div>
        <SelectField
          floatingLabelText="Resaltar Jugador"
          value={this.props.selectedPlayer}
          onChange={(event, index, value) => this.props.handleSelect(value)}
        >
          <MenuItem value={null} primaryText="" />

          {this.props.players
            .map(m => (
              <MenuItem key={m.number} value={m} primaryText={m.name} />
            ))}
      </SelectField>
     </div>
    );
  }
}

export default PlayerSelection;