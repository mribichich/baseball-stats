import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const PlayerSelection = ({players, selectedPlayer, handleSelect}) => {
  return (
     <div>
     <InputLabel >Resaltar Jugador</InputLabel>
        <Select
          value={selectedPlayer}
          onChange={(event) => handleSelect(event.target.value)}
        >
          <MenuItem value={''}  />

          {players
            .map(m => (
              <MenuItem key={m.number} value={m} >{m.name}</MenuItem>
            ))}
      </Select>
     </div>
    );
  }

export default PlayerSelection;