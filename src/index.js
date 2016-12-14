//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
//import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
//import Meter from 'grommet/components/Meter';
//import Title from 'grommet/components/Title';
//import Value from 'grommet/components/Value';
//import Image from 'grommet/components/Image';

import MyHeader from './components/MyHeader';
import MyHero from './components/MyHero';
import MainText from './components/MainText';
import BikeCards from './components/BikeCards';
import MyFooter from './components/MyFooter';
import BikeCustomizeCharts from './components/BikeCustomizeCharts';

class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <MyHeader/>
        <MyHero/>
        <MainText/>
        <BikeCards/>
        <BikeCustomizeCharts/>
        <MyFooter/>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
