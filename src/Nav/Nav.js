import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{

    render() {
        return(
            <div className='navBar'>
                <Route exact path='/'
                    render={()=> {return <div className='pageName'> Noteful </div>}}
                    />
                <Route path='/folder'
                    render={({ history }) => {
                        return <div className='pageName'>Noteful Folder Page /folder/</div>
                    }}
                    />
                <Route path='/note'
                    render={({ history }) => {
                        console.log(history)
                        return <div className='pageName'>Noteful Folder Page /note/</div>
                    }}
                    />
            </div>
        )
    }
}

export default withRouter(Nav);