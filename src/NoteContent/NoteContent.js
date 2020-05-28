import React from 'react';
import { withRouter } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import Note from '../Note/Note'
import './NoteContent.css'

class NoteContent extends React.Component{

    render(){
        console.log(this.props)
        const noteToShow = this.props.notes.find(note => note.id === this.props.match.params.noteId)
        return(
            <div className='noteContent'>
                <Note id={noteToShow.id} name={noteToShow.name} />
                {noteToShow.content}
            </div>
        ) 
    }
}

export default withRouter(NoteContent);