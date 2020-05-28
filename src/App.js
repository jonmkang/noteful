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

class App extends React.Component {
  state = {
    folders: Store.folders,
    notes: Store.notes,
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

  render(){
    return (
      <main className='App'>

        <Nav folders={this.state.folders} notes={this.state.notes}/>
        <Link className="homePage" to='/'>Noteful</Link>

        <div className='content'>
          <Route exact path='/' 
            render={() => <MainSidebar 
                              selectFolder={this.selectFolder}  
                              folders={this.state.folders} 
                              notes={this.state.notes}/>} 
            />

          <Route path='/folder/:folderId'
            render={() => <FolderSidebar 
                              folders={this.state.folders} 
                              selectFolder={this.selectFolder} 
                              selectedFolder={this.state.selectedFolder}/>} 
              />
          <Route path='/note/:noteId'
            render={() => <NoteSidebar 
                              folders={this.state.folders} 
                              notes={this.state.notes}/>} 
            />

          <Route exact path='/' 
          render={() => <MainNoteList 
                              notes={this.state.notes} 
                              addNote={this.addNote} 
                              selectedFolder={this.state.selectedFolder} 
                              selectFolder={this.selectFolder} />} 
            />

          <Route path='/folder/:folderId'
            render={() => <NoteList 
                              notes={this.state.notes} 
                              selectedFolder={this.state.selectedFolder} 
                              selectFolder={this.selectFolder} />} 
            />

          <Route path='/note/:noteId'
            render={() => <NoteContent 
                              notes={this.state.notes} 
                              selectedFolder={this.state.selectedFolder} 
                              selectFolder={this.selectFolder} />} 
              />
        </div>
      </main>
    )
  }
}
export default App;
