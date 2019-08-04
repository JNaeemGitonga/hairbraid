import React,  { Component } from 'react';
import styles from './Maintenance.module.css';

export default class Maintenence extends Component {

  render() {


    return (
      <div id={ styles.maintenance }>
        <h1>Page Undergoing Maintenance</h1>
        <img src='https://user-images.githubusercontent.com/26694930/37315354-9c79c4a4-262f-11e8-9da2-9a7cadb0a02e.gif' alt='maintenance gif'/>
        <h2>We are currently performing upgrades to our site</h2>
      </div>
        
    )
  }
}