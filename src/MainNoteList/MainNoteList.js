import React from 'react';
import Note from '../Note/Note'
import './MainNoteList.css';
import Context from '../Context';
import { Link } from 'react-router-dom'

class MainNoteList extends React.Component{
    static contextType = Context;

    render(){
        
        const { notes } = this.context;
        const notesToShow = notes.map(note => <Note 
            name={note.name} 
            key={note.name+note.id} 
            id={note.id} 
            />)
            
        return(
            <Context.Consumer>
                {(context) => (
                    <div className='notes'>
                    {notesToShow}
                    <Link to='/addNote' className="addNoteLink">Add Note</Link>
                </div>
                )}
            </Context.Consumer>
        )
    }
}

export default MainNoteList;