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
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      {
        dadosIniciais.categorias.map((categoria, index) => (
          <Carousel
            category={categoria}
            ignoreFirstVideo={index === 0}
            key={index}
          />
        ))
      }

      <Footer />
    </Container>
  );
};

export default Home;
