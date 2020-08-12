import React, { useMemo } from 'react';

import { getYouTubeId } from '../../../util';

import { VideoCardContainer } from './style';
import { VideoCardProps } from './types';

const VideoCard = ({ videoTitle, videoURL, categoryColor }: VideoCardProps) => {

  const image = useMemo(() => {
    const youTubeID = getYouTubeId(videoURL);
    return `https://img.youtube.com/vi/${youTubeID}/hqdefault.jpg`
  }, [videoURL]);

  return (
    <VideoCardContainer
      categoryColor={categoryColor}
      href={videoURL}
      url={image}
      target='_blank'
    />
  )
};

export default VideoCard;
