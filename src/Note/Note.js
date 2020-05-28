import React from 'react';
import { Link } from 'react-router-dom'

class Note extends React.Component{

    render(){
        return(
            <div className="note">
                <Link to={'/note/'+this.props.id}>{this.props.name}</Link>
            </div>
        )
    }
}

export default Note;