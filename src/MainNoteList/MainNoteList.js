import React from 'react';
import Note from '../Note/Note'
import './MainNoteList.css';
import { withRouter } from 'react-router-dom'

class MainNoteList extends React.Component{

    render(){
        // console.log(this.props)
        const notes = this.props.notes.map(note => <Note 
            name={note.name} 
            key={note.name+note.id} 
            id={note.id} 
            content={note.content}
            folderId={note.folderId}
            selectedFolder={this.props.selectedFolder} 
            selectFolder={this.props.selectFolder}
            />)
            
        return(
            <div className='notes'>
                {notes}
                <button className='addNote'>
                    Add note
                </button>
            </div>
        )
    }
}

export default withRouter(MainNoteList);