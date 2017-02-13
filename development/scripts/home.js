import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/home.scss';

class Home extends Component{
    render(){
        return(
            <div className='home'>Hello world</div>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.querySelector('.content')
)