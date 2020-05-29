import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../Context';

function deleteNoteRequest( noteId, history, callback) {



    fetch(`http://localhost:9090/notes/${noteId}`, {
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
        console.log(history)
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
                        <Link to={'/note/'+this.props.id}>
                            {this.props.name}
                        </Link>
                        <button className='deleteNote' onClick={() => deleteNoteRequest(this.props.id, this.props.history, context.deleteNote)}>Delete Note</button>
                    </div>
                )}
            </Context.Consumer>
            
        )
    }
}

export default withRouter(Note);