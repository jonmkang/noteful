import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import { Route, Link } from 'react-router-dom';
import MainSidebar from './MainSidebar/MainSidebar';
import MainNoteList from './MainNoteList/MainNoteList';
import FolderSidebar from './FolderSidebar/FolderSidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteContent from './NoteContent/NoteContent';
import Context from './Context'
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import RenderError from './RenderError';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  state = {
    folders: [],
    notes: [],
    selectedFolder: null,
    selectedNote: null
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
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
    fetch((`https://powerful-reef-01197.herokuapp.com/api/folders`), {
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

    fetch((`https://powerful-reef-01197.herokuapp.com/api/notes`), {
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

                <RenderError>
                  <Route exact path='/' 
                    component={MainSidebar}
                    />
                </RenderError>

                <RenderError>
                  <Route path='/folders/:folderId'
                    component={FolderSidebar} 
                    />
                </RenderError>

                <RenderError>
                  <Route path='/notes/:noteId'
                    component={NoteSidebar}
                    />
                </RenderError>
                
                  
            
                
                        
                <Route exact path='/' 
                  component={MainNoteList}
                  />

                <Route path='/folders/:folderId'
                  component={NoteList} 
                  />

                <Route path='/notes/:noteId'
                  component={NoteContent} 
                    />

                <Route path='/addFolder'
                  render={(props) => <AddFolder {...props} addFolder={this.addFolder}/> }
                  />

                <Route path='/addNote'
                  render={(props) => <AddNote {...props} folders={this.state.folders} addNote={this.addNote}/>}
                  />
                
              
            </div>
        </Context.Provider>
      </main>
    )
  }
}
export default App;
