import React from 'react';

import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../mock/mock.json';

import {
  Container
} from './style';

const Home = () => {

  return (
    <Container>
      <Header />

      <BannerMain
        videoTitle={dadosIniciais.bannerMain.titulo}
        url={dadosIniciais.bannerMain.url}
        videoDescription=''
      />

      {
        dadosIniciais.categorias.map((categoria, index) => (
          <Carousel
            category={categoria}
            key={index}
          />
        ))
      }

      <Footer />
    </Container>
  );
};

export default Home;
