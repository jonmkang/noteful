import React from 'react';
import './NoteSidebar.css';
import Context from '../Context';

class NoteSidebar extends React.Component{
    static contextType = Context;

    render(){
        const { notes, folders } = this.context;
        if(notes.length === 0 || folders.length === 0){
            return (<h3>Loading notes and folders</h3>)
        }
        const folderId = (this.props.match.params.noteId) ? notes.find(note => note.id == this.props.match.params.noteId).folder_id : '0'
        const folderNum = folders.findIndex(folder => folder.id === folderId)
        return (
            <Context.Consumer>
                {(context) => (
                    <div className='sidebar'>
                        <button className='noteReturn' onClick={() => this.props.history.goBack()}>Return</button>
                        {folders[folderNum].name} Folder
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default NoteSidebar;