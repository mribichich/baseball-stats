import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const MinimumAtBatsSelection = ({min, onChanged}) => {
  return (
    <div>
    <InputLabel >Minimo PA</InputLabel>
      <TextField
        style={{ width: 100 }}
        defaultValue={min}
        type="number"
        min="0"
        onChange={(event) => onChanged(parseInt(event.target.value, 0))}/>
    </div>
  );
}

MinimumAtBatsSelection.defaultProps = {
  min: 0
}

export default MinimumAtBatsSelection;