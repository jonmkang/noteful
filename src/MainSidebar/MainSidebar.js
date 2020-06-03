import React from 'react';
import Folder from '../Folder/Folder'
import './MainSidebar.css';
import Context from '../Context';
import { Link } from 'react-router-dom';

class MainSidebar extends React.Component{
    static contextType = Context;

    render(){
        const { folders } = this.context;
        const foldersToShow = folders.map(folder => <Folder name={folder.name} id={folder.id} key={folder.name+folder.id} />)
       
        return (
            <Context.Consumer>
                {(context) => (
                    <div className='sidebar'>
                    {foldersToShow}
                    <Link className='addFolder' to='/addFolder'>Add Folder</Link>
                    </div>
                )}
            </Context.Consumer> 
        )
    }
}

export default MainSidebar;