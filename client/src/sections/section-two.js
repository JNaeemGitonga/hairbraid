import React from 'react';
import ProjectStack from '../project-stack';

const SectionTwo = () => (
    <div id="about-us" className="container-two about-us">
        <h2>We're the best at innovation</h2>
        {/* THESE TWO BOXES ON EXTRA WIDE SCREENS NEED TO BE BROUGHT IN CLOSER */}
        <div className="box-blue" data-aos="fade-right">
            <p>
                Our team has a great track record of innovation. We
                actively use the latest and greatest in web and
                mobile development technologies. If you have a
                technology that we are not familiar with our
                engineering team will be more than happy to learn
                those skills to best serve you!
            </p>
        </div>

        <div className="box-red" data-aos="fade-left">
            <p>
                Below is a list of some of the technologies we use,
                or have used while building products for our
                clients:
            </p>
            <ProjectStack />
        </div>
    </div>
);

export default SectionTwo;