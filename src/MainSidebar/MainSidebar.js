import React from 'react';
import { withRouter } from 'react-router-dom';
import Folder from '../Folder/Folder'
import './MainSidebar.css';

class Sidebar extends React.Component{
    render(){
        const folders = this.props.folders.map(folder => <Folder name={folder.name} id={folder.id} key={folder.name+folder.id} />)
       
        return (
            <div className='sidebar'>
                {folders}
            </div>
        )
    }
}

export default withRouter(Sidebar);