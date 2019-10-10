import React, { Component } from 'react';
import './AtWork.css';

class AtWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            working: props.on,
        };
    
    }
    handleClick = () => {
        this.setState({ working: !this.state.working });
    };

render() {
    const isWorking = this.state.working ? 'Yesss' : 'Nope';
    const imageSrc = this.state.working ? 'status-online' : 'status-offline';
    return (
        <div>
            <figure className='AtWork'>
                <button className='status' onClick = {this.handleClick}>{isWorking} </button>
                <div className= {imageSrc} >
                
                </div>
                <figcaption className='status-text'>Is He Working ?</figcaption>
            </figure>
        </div>
    );
}    
}

export default AtWork;