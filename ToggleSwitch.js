import React from 'eact';
import { Button } from 'eactstrap';

function ToggleSwitch({ darkMode, handleToggle }) {
  return (
    <Button color="primary" onClick={handleToggle} className={darkMode? 'dark-mode-toggle-on' : 'dark-mode-toggle-off'}>
      {darkMode? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

export default ToggleSwitch;