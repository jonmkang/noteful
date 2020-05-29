import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import Context from '../Context';


class NoteList extends React.Component{
    static contextType = Context;
    

    render(){
        const { notes, folder } = this.context
        const notesInFolder = notes.filter(note => note.folderId === this.props.match.params.folderId)
        const listOfNotes = notesInFolder.map(note => <Note id={note.id} name={note.name}/>)
        return(
            <Context.Consumer>
                {(context) => (
                    <div className='notes'>
                        {listOfNotes}
                    </div>
                )}
            </Context.Consumer>
            
        )
    }
}

export default NoteList;