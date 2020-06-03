import React, { Component } from 'react';
import './AddFolder.css';

class AddFolder extends Component {

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
            console.log(data)
            console.log('Successfully added folder: ', folderToAdd)
            this.props.history.push('/')
        })
        .catch(error => {
        console.error(error)
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
                        required/>
                    <button type="submit">Add Folder</button>
                </form>
            </section>
        )
    }
}

export default AddFolder;