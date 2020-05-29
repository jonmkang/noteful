import React from 'react';
import Folder from '../Folder/Folder'
import './MainSidebar.css';
import Context from '../Context';

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
                    </div>
                )}
            </Context.Consumer> 
        )
    }
}

export default MainSidebar;