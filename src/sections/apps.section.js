import React from 'react';
import projects from './data/projects.json';

const StylesSection = () => (
    <div id="apps" className="container apps">
        <div className="subject">
            <h5>STYLES</h5>
        </div>
        <div className="content">
            <p>
                Styles include but not limited too:
            </p>
            <ul>
                { projects.map((project, i) => (
                    <li key={i}>
                        <span>{ project.name }</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default StylesSection;