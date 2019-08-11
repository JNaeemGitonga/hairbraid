import React, { Component } from 'react';
import ig from './ig.png';
import fb from './fb.png';
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
                            <p>Give feed and share light with your hair. It’s your crown so wear it best Queen.</p>
                        </div>
                        <div className="footer-container b">
                            <h6>CONTACT US</h6>
                            <div className="two">
                                <a href="mailto:herbraidqueen@gmail.com">
                                    <p>herbraidqueen@gmail.com</p>
                                </a>
                                <p>680 Murphy Ave. Suite 4132, Atlanta, GA 30310</p>
                                <p><a href="tel:1-404-405-5065">404-405-5065</a></p>
                            </div>
                        </div>
                    </section>
                    <section className="section-2">
                        <div className="footer-container a">
                            <h6>SOCIAL MEDIA</h6>

                            <ul className="social-1">
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.facebook.com/naturalzsalon/">
                                            <img
                                                className="logo fb-logo"
                                                src={fb}
                                                alt="facebook logo"
                                            />
                                        </a>
                                    </div>
                                </li>
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.instagram.com/herbraidqueen/">
                                            <img
                                                className="logo"
                                                src={ig}
                                                alt="instagram logo"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="btm-line">
                    <p className="btm-line-text">
                        © {moment().format('YYYY')} HERBRAIDQUEEN
                    </p>
                    <a className="builder-anchor" href="http://gtng.tech"><p className="btm-line-text builder">by GTNG™</p></a>
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
