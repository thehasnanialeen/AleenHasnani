import React from 'react';
import './section_heading.scss';

const Section_Heading = ({ title }) => {
    return (
        <div className="section-heading">
            <h2>{title}</h2>
            <div className="heading-style"></div>
        </div>
    );
};

export default Section_Heading;