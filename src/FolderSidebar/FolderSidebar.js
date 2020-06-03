import React from 'react';
import Folder from '../Folder/Folder';
import './FolderSidebar.css';
import Context from '../Context';
import { Link } from 'react-router-dom';


class FolderSidebar extends React.Component{
    static contextType = Context; 

    render(){
        const { folders } = this.context;
        const foldersToShow = folders.map(folder => <Folder name={folder.name} id={folder.id} key={folder.name+folder.id} />)

        return (
            <Context.Consumer>
                {(context) => (
                    <div className='sidebar'>
                        {foldersToShow}
                        <button className='return' onClick={() => this.props.history.push('/')}>Click to return</button>
                        <Link className='addFolder' to='/addFolder'>Add Folder</Link>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default FolderSidebar;