import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import { listeners } from './helpers';
import Footer from './footer/footer';
import { 
    Head,
    SectionTwo,
    AppsSection,
    ShadowSectionOne,
    ShadowSectionTwo,
} from './sections';
import ReturnArrow from './rtnArrow/returnArrow';

class App extends Component {
    componentDidMount() {
        AOS.init({
            easing: 'ease-in-out-sine'
        });
        listeners.showHideArrow();
    }

    render() {
        return (
            <div className="App">
                <ReturnArrow />
                <Head />
                <ShadowSectionOne />
                <SectionTwo />
                <ShadowSectionTwo />
                <AppsSection />
                <Footer />
            </div>
        );
    }
}

export default App;
