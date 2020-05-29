import React from 'react';
import './App.css';
import Store from './Store'
import Nav from './Nav/Nav'
import { Route, Link } from 'react-router-dom';
import MainSidebar from './MainSidebar/MainSidebar';
import MainNoteList from './MainNoteList/MainNoteList';
import FolderSidebar from './FolderSidebar/FolderSidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteContent from './NoteContent/NoteContent';
import Context from './Context'

class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    selectedFolder: null,
    selectedNote: null
  }

  addFolder = folder => {
    this.setState({
      folder: [...this.state.folder, folder]
    })
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.bookmarks, note]
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  selectFolder = folder => {
    this.setState({
      selectedFolder: folder
    })
  }

  selectedNote = note => {
    this.setState({
      selectedNote: note
    })
  }

  componentDidMount(){
    fetch((`http://localhost:9090/folders`), {
      method: 'GET',
      headers: {
        'context-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then(error => {
          // then throw it
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        folders: data
      })
    })
    .catch(error => {
      console.error(error)
    })

    fetch((`http://localhost:9090/notes`), {
      method: 'GET',
      headers: {
        'context-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then(error => {
          // then throw it
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        notes: data
      })
    })
    .catch(error => {
      console.error(error)
    })



  }

  render(){
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      selectFolder: this.selectFolder,
      selectedNote: this.selectedNote,
      selectedFolder: this.state.selectedFolder,
    }

    return (
      <main className='App'>
        <Context.Provider value={contextValue}>
          <Nav folders={this.state.folders} notes={this.state.notes}/>
          <Link className="homePage" to='/'>Noteful</Link>

          <div className='content'>
            <Route exact path='/' 
              component={MainSidebar}
              />

            <Route path='/folder/:folderId'
              component={FolderSidebar} 
              />

            <Route path='/note/:noteId'
              component={NoteSidebar}
              />

            <Route exact path='/' 
              component={MainNoteList}
              />

            <Route path='/folder/:folderId'
              component={NoteList} 
              />

            <Route path='/note/:noteId'
              component={NoteContent} 
                />
          </div>
        </Context.Provider>
      </main>
    )
  }
}
export default App;
