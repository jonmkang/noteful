import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css'

class Folder extends React.Component{

    render(){
        return (
                <NavLink className='folder' to={`/folder/${this.props.id}`}>{this.props.name}</NavLink>
        )
    }
}

export default Folder;