import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

function CustomChipInput({ value, onAdd, onDelete }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    onDelete(chipToDelete);
  };

  return (
    <div>
      <TextField
        label="Tags"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div style={{ marginTop: '8px' }}>
        {value.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onDelete={handleDeleteChip(chip)}
            style={{ margin: '4px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomChipInput;
