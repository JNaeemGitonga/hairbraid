import React, { Component } from 'react';
import { listeners, tools } from '../helpers';
import './sn.css';
import links from './links.json';

export default class StickyNav extends Component {
    
    state = {
        first: '',
        "about-us": '',
        apps: '',
        footer: ''
    }

    componentDidMount() {
        listeners.activateTabOnScroll(links);
        const navbar = document.getElementById('navbar');
        const sticky = navbar.offsetTop;
        window.onscroll = function() {
            tools.stickyNav(navbar, sticky);
        };
    }

    toggleClass = element => {
        for(let item in this.state) {
            if(this.state[item] === 'active') {
                this.setState({[item]: ''});
            }
        }
        this.setState({[element]: 'active'});
    }

    render() {
        return (
            <nav id='navbar' className='scroll'>
                <span className='filler' />
                    {links.map((link, i) => (
                        <a
                            id={link['link-id']}
                            key={i}
                            href={link.href}
                            className={`${link.class} ${this.state[link['container-id']]}`}
                            onClick={e => {
                                e.preventDefault();
                                tools.scrollTo(link['container-id'])
                                this.toggleClass(link['container-id'])
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
            </nav>
        );
    }
}
