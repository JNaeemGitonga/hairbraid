import React from 'react';
import SectionOne from './section-one';
import StickyNav from '../sticky-nav/sticky-nav';
import './head.css';

const Head = props => (
    <section className="head">
        <header className="backgrounda">
            <div className="shadow-1">
                <div className="header-wrap">
                    <h1 className="header">HERBRAIDQUEEN</h1>
                </div>
            </div>
        </header>
        <StickyNav />
        <SectionOne />
    </section>
);

export default Head;
