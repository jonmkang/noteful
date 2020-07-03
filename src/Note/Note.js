import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../Context';
import './Note.css'
import PropTypes from 'prop-types';

function deleteNoteRequest( noteId, history, callback) {

    fetch(`https://powerful-reef-01197.herokuapp.com/api/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        // call the callback when the request is successful
        // this is where the App component can remove it from state
        history.push('/')
        callback(noteId)
        
      })
      .catch(error => {
        console.error(error)
      })
  }

class Note extends React.Component{
    static contextType = Context;

    render(){
        return(
            <Context.Consumer>
                {(context) => (
                    <div className="note">
                        <Link to={'/notes/'+this.props.id}>
                            {this.props.name}
                        </Link>
                        <button className='deleteNote' onClick={() => deleteNoteRequest(this.props.id, this.props.history, context.deleteNote)}>Delete Note</button>
                    </div>
                )}
            </Context.Consumer>
            
        )
    }
}

Note.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  folderId: PropTypes.number
}

export default withRouter(Note);