import React from 'react';
import { withRouter } from 'react-router-dom';
import './NoteSidebar.css';

class NoteSidebar extends React.Component{
    render(){
        const folderId = this.props.notes.find(note => note.id === this.props.match.params.noteId).folderId
        const folderNum = this.props.folders.findIndex(folder => folder.id === folderId)
        return (
            <div className='sidebar'>
                <button className='return' onClick={() => this.props.history.goBack()}>Click to return</button>
                Folder {folderNum+1}
            </div>
        )
    }
}

export default withRouter(NoteSidebar);