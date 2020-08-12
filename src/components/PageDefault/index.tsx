import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import {
  Main,
} from './style';
import {
  PageDefaultProps
} from './types';

const PageDefault = ({ children }: PageDefaultProps) => (
  <>
    <Header />
    <Main>
      { children }
    </Main>
    <Footer />
  </>
);

export default PageDefault;
