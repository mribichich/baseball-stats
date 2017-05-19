import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const PlayerSelection = ({players, selectedPlayer, handleSelect}) => {
  return (
     <div>
        <SelectField
          floatingLabelText="Resaltar Jugador"
          value={selectedPlayer}
          onChange={(event, index, value) => handleSelect(value)}
        >
          <MenuItem value={null} primaryText="" />

          {players
            .map(m => (
              <MenuItem key={m.number} value={m} primaryText={m.name} />
            ))}
      </SelectField>
     </div>
    );
  }

PlayerSelection.PropTypes = {
  players: PropTypes.array,
  selectedPlayer: PropTypes.object,
  handleSelect: PropTypes.func
}

export default PlayerSelection;