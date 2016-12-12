import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
//import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import styles from './MyHeader.module.scss'
import cssModules from 'react-css-modules';

const MyHeader = () => (
  <Header
    className={styles.customheader}
    justify="between"
    size="medium"
    fixed={true}
    float={true}
    pad="small"
  >
    <Title>
      <Image src="/public/wolf-small.png" size="thumb" />
    </Title>
  </Header>
)

export default cssModules(MyHeader, styles);
