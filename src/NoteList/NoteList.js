import React from 'react';
import { withRouter } from 'react-router-dom';
import './NoteList.css';
import Note from '../Note/Note';

class NoteList extends React.Component{

    render(){
        const notesInFolder = this.props.notes.filter(note => note.folderId === this.props.match.params.folderId)
        console.log(notesInFolder)
        const listOfNotes = notesInFolder.map(note => <Note id={note.id} name={note.name}/>)
        return(
            <div className='notes'>
                {listOfNotes}
            </div>
        )
    }
}

export default withRouter(NoteList);