import React, {Component} from 'react';
import './gp.css';

export default class GTNGPartner extends Component {
    

    render() {
        
        return (
            <div id='modal' style={{display:this.props.display}}>
                <div className='wrapper'>
                   <h1  className='close'onClick={this.props.modalDisplay} > close </h1>
                    {this.props.iframe}
                </div>                
            </div>
        )
    }
}
