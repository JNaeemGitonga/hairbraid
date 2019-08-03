import React from 'react';
import './sections.css';
import SwipeableTextMobileStepper from '../SwipeableTextMobileStepper';

const SectionOne = () => (
    <div id="first" className="container first">
    <div className="purpose">

        <h1>Master Braider!</h1>
        <p>Braids&#8226;Natural Styles&#8226;Protective Styles</p>
    </div>
        <div className="content-1">
           <SwipeableTextMobileStepper />
        </div>
    </div>
);
export default SectionOne;