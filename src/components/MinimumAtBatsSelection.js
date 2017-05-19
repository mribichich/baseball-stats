import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const MinimumAtBatsSelection = ({min, onChanged}) => {
  return (
    <div>
      <TextField
        style={{ width: 100 }}
        defaultValue={min}
        floatingLabelText="Minimo PA"
        type="number"
        min="0"
        onChange={(event) => onChanged(parseInt(event.target.value, 0))}/>
    </div>
  );
}

MinimumAtBatsSelection.PropTypes = {
  min: PropTypes.number,
  onChanged: PropTypes.func
}

MinimumAtBatsSelection.DefaultProps = {
  min: 0
}

export default MinimumAtBatsSelection;