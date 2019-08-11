import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import { listeners } from './helpers';
import Footer from './footer/footer';
import { 
    Head,
    SectionTwo,
    StylesSection,
    ShadowSectionOne,
    ShadowSectionTwo,
} from './sections';
import ReturnArrow from './rtnArrow/returnArrow';
import Maintenence from './Maintenance';

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
                <StylesSection />
                <Footer />
                
            </div>
        );
    }
}

export default App;
