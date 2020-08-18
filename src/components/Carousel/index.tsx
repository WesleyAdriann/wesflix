import React from 'react';

import Slider from './Slider';
import VideoCard from './VideoCard';

import { VideoCardGroupContainer, Title, ExtraLink } from './style';
import { CarouselProps } from './types';

const Carousel = ({ category, first }: CarouselProps) => {

  return (
    <VideoCardGroupContainer>
      {
        category.titulo && (
          <>
            <Title backgroundColor={category.cor}>
              { category.titulo }
            </Title>
            {
              category.link_extra && (
                <ExtraLink href={category.link_extra.url} target='_blank'>
                  { category.link_extra.text }
                </ExtraLink>
              )
            }
          </>
        )
      }
      <Slider autoplay={first}>
        {
          category.videos.map((video, index) => (
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={category.cor}
              key={index}
            />
          ))
        }
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
