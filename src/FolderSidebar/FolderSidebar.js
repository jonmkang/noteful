import React from 'react';
import { withRouter } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './FolderSidebar.css';

class FolderSidebar extends React.Component{
    render(){
        const folders = this.props.folders.map(folder => <Folder name={folder.name} id={folder.id} key={folder.name+folder.id} />)
        console.log(this.props)
        return (
            <div className='sidebar'>
                {folders}
                <button className='return' onClick={() => this.props.history.push('/')}>Click to return</button>
            </div>
        )
    }
}

export default withRouter(FolderSidebar);