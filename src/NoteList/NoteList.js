import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import Context from '../Context';
import { Link } from 'react-router-dom'


class NoteList extends React.Component{
    static contextType = Context;

    constructor(props){
        super(props);
        this.state = {
            noNotes: false
        }
    }
    

    static getDerivedStateFromError(error){
        return { noNotes: true}
    }

    

    render(){
        if(this.state.hasError){
            return (
                <h2>No notes or folders to be found</h2>
            )
        }
        
        const { notes } = this.context
        const notesInFolder = notes.filter(note => note.folderId === this.props.match.params.folderId)
        const listOfNotes = notesInFolder.map(note => <Note id={note.id} name={note.name} folderId={note.folderId}/>)
        return(
            <Context.Consumer>
                {(context) => (
                    <div className='notes'>
                        {listOfNotes}
                        <Link to='/addNote' className="addNoteLink">Add Note</Link>
                    </div>
                )}
            </Context.Consumer>
            
        )
    }
}

export default NoteList;