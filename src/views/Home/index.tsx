import React from 'react';

import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import VideoCardGroup from '../../components/VideoCardGroup';
import Footer from '../../components/Footer';

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

      <VideoCardGroup
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[1]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[2]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[3]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[4]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </Container>
  );
};

export default Home;
