import React from 'react'

const Context = React.createContext({
  notes: [],
  folders: [],
  addNote: () => {},
  deleteNote: () => {},
  addFolder: () => {},
  selectFolder: () => {},
  selectedNote: () => {},
  selectedFolder: ''
})

export default Context;