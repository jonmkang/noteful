import React from 'react';
import Note from '../Note/Note'
import './MainNoteList.css';
import Context from '../Context';

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
                    <button className='addNote'>
                        Add note
                    </button>
                </div>
                )}
            </Context.Consumer>
        )
    }
}

export default MainNoteList;