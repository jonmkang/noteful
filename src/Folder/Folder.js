import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';
import Context from '../Context';
import PropTypes from 'prop-types';

class Folder extends React.Component{
    static contextType = Context;

    render(){
        return (
            <NavLink className='folder' to={`/folder/${this.props.id}`}>{this.props.name}</NavLink>      
        )
    }
}

Folder.propTypes ={
    name: PropTypes.string.isRequired,
    id: PropTypes.number
}

export default Folder;