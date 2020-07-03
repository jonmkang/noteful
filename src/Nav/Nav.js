import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';

class Nav extends React.Component{

    render() {
        return(
            <div className='navBar'>
                <Route path='/folder'
                    render={({ history }) => {
                        return <div className='pageName'>Noteful Folder Page /folder/</div>
                    }}
                    />

                <Route path='/notes'
                    render={({ history }) => {
                        return <div className='pageName'>Noteful Folder Page /note/</div>
                    }}
                    />

                <Route path='/addNote'
                    render={({ history }) => {
                        return <div className='pageName'>Noteful Add Note</div>
                    }}
                    />

                <Route exact path='/'
                    render={()=> {return <div className='pageName'> Noteful </div>}}
                    />
                
            </div>
        )
    }
}

Nav.defaultProps = {
    folders: [],
    notes: []
}

Nav.propTypes = {
    folders: PropTypes.array,
    notes: PropTypes.array
}

export default withRouter(Nav);