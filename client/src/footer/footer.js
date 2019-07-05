import React, { Component } from 'react';
import ln from './ln.png';
import ig from './ig.png';
import './footer.css';
import GTNGPartner from '../partnerForm/gtngPartner';
import request from 'superagent';
import moment from 'moment';

export default class Footer extends Component {
    state = {
        display: 'none',
        iframe: ''
    };

    call = () => {
        request.get('/form').then(res => console.log(res));
    };

    modalDisplay = () => {
        if (this.state.display === 'none') {
            this.setState({ display: 'block' });
        } else {
            this.setState({ display: 'none' });
        }

        let overflow = document.getElementById('body').style.overflow;
        if (this.state.display === 'block') {
            overflow = 'hidden';
        }

        if (overflow === 'hidden') {
            overflow = 'auto';
        }
    };

    render() {
        const iframe = (
            <iframe
                title="application form"
                height="315"
                width="560"
                scrolling="yes"
                allowFullScreen=""
                frameBorder="0"
                src="https://form.jotform.com/80746079884169"
            >
                {/* src="https://form.jotform.com/80746079884169" */}
            </iframe>
        );

        return (
            <footer id="footer" className="footer contact">
                <div className="wrap">
                    <section className="section-1">
                        <div className="footer-container a">
                            <h6>MISSION </h6>
                            <p>Build mobile and web apps, better than today's!</p>
                        </div>
                        <div className="footer-container b">
                            <a
                                onClick={() => {
                                    this.setState({ iframe: iframe });
                                    this.modalDisplay();
                                }}
                            >
                                <h6 className="careers">CAREERS</h6>
                            </a>
                        </div>
                    </section>
                    <section className="section-2">
                        <div className="footer-container a">
                            <h6>SOCIAL MEDIA</h6>

                            <ul className="social-1">
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.linkedin.com/company/gtng/">
                                            <img
                                                className="logo"
                                                src={ln}
                                                alt="Black Tech meetup"
                                            />
                                        </a>
                                    </div>
                                </li>
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.instagram.com/gtng_tech/">
                                            <img
                                                className="logo"
                                                src={ig}
                                                alt="State of Black Tech meetup"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-container b">
                            <h6>CONTACT US</h6>
                            <div className="two">
                                <a href="mailto:info@gtng.tech">
                                    <p>info@gtng.tech</p>
                                </a>
                                <p>165 Courtland St, Suite A-224, Atlanta, GA 30303</p>
                                <p><a href="tel:1-404-670-0059">404-670-0059</a></p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="btm-line">
                    <p className="btm-line-text">
                        © {moment().format('YYYY')} GTNG™
                    </p>
                </div>
                <GTNGPartner
                    display={this.state.display}
                    modalDisplay={this.modalDisplay}
                    iframe={this.state.iframe}
                />
            </footer>
        );
    }
}
