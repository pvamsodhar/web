import React from 'eact';
import ReactDOM from 'eact-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { NoteProvider } from './context/NoteContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);