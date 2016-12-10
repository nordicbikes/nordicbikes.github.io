//import styles
import 'grommet/scss/vanilla/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
//import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
//import Meter from 'grommet/components/Meter';
//import Title from 'grommet/components/Title';
//import Value from 'grommet/components/Value';
import Section from 'grommet/components/Section';
//import Image from 'grommet/components/Image';

import MyHero from './components/MyHero';

class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <MyHero/>
        <Section>
          <Box
            full="horizontal"
            pad="large"
          >
            Your premium quality customizable bicycles.
          </Box>
        </Section>
        <Footer
          primary={true}
          appCentered={true}
          direction="column"
          align="center"
          pad="small"
          colorIndex="grey-1"
        >
          <p>
            Copyright Nordic Bikes all rights protected
          </p>
        </Footer>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
