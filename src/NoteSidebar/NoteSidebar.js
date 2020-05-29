import React from 'react';
import './NoteSidebar.css';
import Context from '../Context';

class NoteSidebar extends React.Component{
    static contextType = Context;

    render(){
        const { notes, folders } = this.context;
        const folderId = (this.props.match.params.noteId) ? notes.find(note => note.id === this.props.match.params.noteId).folderId : '0'
        const folderNum = folders.findIndex(folder => folder.id === folderId)
        return (
            <Context.Consumer>
                {(context) => (
                    <div className='sidebar'>
                        <button className='return' onClick={() => this.props.history.goBack()}>Click to return</button>
                        Folder {folderNum+1}
                    </div>
                )}
            </Context.Consumer>
            
        )
    }
}

export default NoteSidebar;