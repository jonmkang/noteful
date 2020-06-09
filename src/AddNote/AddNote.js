import React, { Component } from 'react';
import "./AddNote.css";
import PropTypes from 'prop-types';

class AddNote extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }

    uniqueID(){
        function chr4(){
          return Math.random().toString(16).slice(-4);
        }
        return chr4() + chr4() +
          '-' + chr4() +
          '-' + chr4() +
          '-' + chr4() +
          '-' + chr4() + chr4() + chr4();
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            hasError: false
        })
        const { note, content } = e.target;
        const newNoteId = this.uniqueID();
        const noteToAdd = {
            id: newNoteId,
            name: note.value,
            content: content.value,
            folderId: this.refs.folder.value
        };

        fetch((`http://localhost:9090/notes`), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(noteToAdd)
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
            console.log(data)
            console.log('Successfully added note: ', noteToAdd)
            this.props.addNote(noteToAdd)
            this.props.history.push('/')
        })
        .catch(error => {
        console.error(error)
        this.setState({
            hasError: true
        })
        })
    }

    createFolders(folders) {
        const folderList = folders.map(folder => <option aria-label={folder.name} value={folder.id} key={folder.id+folder.name}>{folder.name}</option>)
        
        return <select name="folder" id="folder" ref="folder" form="addNote" aria-label="folders">{folderList}</select>
    }

    render(){
        const { folders } = this.props;
        const folderSelection = this.createFolders(folders);
        return(
            <section className ='addNote'>
                <h2>Create a Note</h2>
                <form className="addNote_form" onSubmit={this.handleSubmit}>
                    <label htmlFor="noteName">
                        Note Name {' '}
                    </label>
                    <input 
                        type='text' 
                        name='note' 
                        id='note' 
                        placeholder="Note Title"
                        aria-label="Note Title"
                        required/>
                    <label htmlFor="content">
                        Note Content {' '}
                    </label>
                    <textarea 
                        id="content" 
                        name="content" 
                        placeholder="Write Content Here"
                        aria-label="Write Content Here"
                        required>

                    </textarea>
                    <label 
                        htmlFor="folder"
                        aria-label="Folder to put into">
                        Select Folder to put in
                    </label>
                    {folderSelection}
                    <br/>
                    <button type="submit" aria-label="Add Note">Add Note</button>
                </form>
                {this.state.hasError ? 'No server to add to, Try again!': null}
            </section>
        )
    }
}

AddNote.propTypes = {
    folders: PropTypes.array
}

AddNote.defaultProps={
    folders: []
}



export default AddNote;