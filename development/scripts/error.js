import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/error.scss';

class Error extends Component{
    render(){
        return(
            <div className='error'>Error page</div>
        )
    }
}

ReactDOM.render(
    <Error />,
    document.querySelector('.content')
)