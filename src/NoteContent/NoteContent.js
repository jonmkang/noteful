import React from 'react';
import './NoteContent.css'
import Context from '../Context'
import Note from '../Note/Note'
import { Link } from 'react-router-dom'

class NoteContent extends React.Component{
    static contextType = Context;

    render(){
        
        const { notes } = this.context;
        if(notes.length === 0){
            return (<div></div>)
        }
        const noteToShow = notes.find(note => note.id === this.props.match.params.noteId)
        return(
            <Context.Consumer>
                {(context) => (
                    <div className='noteContent'>
                        <Note name={noteToShow.name} id={noteToShow.id}/>
                        {noteToShow.content}
                    </div>
                )}
            </Context.Consumer>
            
        ) 
    }
}

export default NoteContent;