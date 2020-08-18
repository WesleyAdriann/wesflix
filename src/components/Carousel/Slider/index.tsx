/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './style';
import { SliderProps } from './types';

const Slider = ({ children, autoplay }: SliderProps) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      autoplay,
      pauseOnHover: autoplay,
      infinite: true,
      variableWidth: true,
      centerPadding: "60px",
      swipeToSlide: true,
    }}>
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
