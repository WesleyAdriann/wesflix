import React from 'react';

import {
  VideoContainer,
  ResponsiveIframe,
} from './styles';

import {
  VideoIframeResponsiveProps,
} from './types';

const VideoIframeResponsive = ({ youtubeID, videoTitle }: VideoIframeResponsiveProps) => (
  <VideoContainer>
    <ResponsiveIframe
      allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      title={videoTitle}
    />
  </VideoContainer>
);

export default VideoIframeResponsive;
