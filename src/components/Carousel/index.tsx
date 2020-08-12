import React from 'react';

import Slider from './Slider';
import SliderItem from './SliderItem';
import VideoCard from './VideoCard';

import { VideoCardGroupContainer, Title, ExtraLink } from './style';
import { CarouselProps } from './types';

const Carousel = ({ category, ignoreFirstVideo }: CarouselProps) => {

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
      <Slider>
        {
          category.videos.map((video, index) => {
            if(ignoreFirstVideo && index === 0) return <> </>;

            return (
              <SliderItem>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={category.cor}
                />
              </SliderItem>
            );
          })
        }
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
