import React, {Component} from 'react';
import './returnArrow.css';
import { listeners, tools } from '../helpers';

export default class ReturnArrow extends Component {

    componentDidMount() {
        const windowScroll = window.pageYOffset
        const arrowElement = document.getElementById('arrow')

        listeners.showArrow(arrowElement, windowScroll)
    }

    render() {

        return (
            <a className='up-arrow-link'  
                onClick={() => {
                    const yOffset = window.pageYOffset;
                    tools.scrollTop(yOffset);
            }}>
                <div id='arrow' className='arrow-box'>
                    <i className="fas fa-angle-up fa-2x"></i>
                </div>
            </a>
        )
    }
}