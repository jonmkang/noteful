import React, { Component } from 'react';
import './AddFolder.css';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    uniqueID(){
        function chr4(){
          return Math.random().toString(16).slice(-4);
        }
        return chr4() + chr4() +
          '-' + chr4() +
          '-' + chr4() +
          '-' + chr4() +
          '-' + chr4() + chr4() + chr4();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            hasError: false
        })
        const { folder } = e.target;
        const newFolderId = this.uniqueID();
        console.log(folder.value)
        const folderToAdd = {
            id: newFolderId,
            name: folder.value
        };
        console.log(JSON.stringify(folderToAdd))

        fetch((`http://localhost:9090/folders`), {
            method: 'POST',
            
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(folderToAdd)
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
            console.log(this.props)
            console.log(data)
            console.log('Successfully added folder: ', folderToAdd)
            this.props.addFolder(folderToAdd)
            this.props.history.push('/')
        })
        .catch(error => {
        console.error(error)
        this.setState({
            hasError: true
        })
        })
    }


    render() {

        return(
            <section className ='addFolder'>
                <h2>Create a folder</h2>
                <form className="addFolder_form" onSubmit={this.handleSubmit}>
                    <label htmlFor="folderName">
                        Folder Name {' '}
                    </label>
                    <input 
                        type='text' 
                        name='folder' 
                        id='folder' 
                        placeholder="Folder 1"
                        aria-label="Enter Folder Name"
                        aria-required="true"
                        required/>
                    <button type="submit" aria-label="Add Folder">Add Folder</button>
                </form>
                {this.state.hasError ? 'No server to add to, Try again!': null}
            </section>
        )
    }
}

AddFolder.propTypes = {
    folders: PropTypes.array
}


export default AddFolder;