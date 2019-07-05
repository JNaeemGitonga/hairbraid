import React from 'react';
import SectionOne from './section-one';
import StickyNav from '../sticky-nav/sticky-nav';
import './head.css';

const Head = props => (
    <section className="head">
        <header className="backgrounda">
            <div className="shadow-1">
                <div className="header-wrap">
                    <h1 className="header">GTNG™</h1>
                    <p className="slogan">
                        <em>boundless</em>
                    </p>
                </div>
            </div>
        </header>
        <StickyNav />
        <SectionOne />
    </section>
);

export default Head;
