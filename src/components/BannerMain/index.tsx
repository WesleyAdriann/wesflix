import React, { useMemo } from 'react';

import { getYouTubeId } from '../../util';

import VideoIframeResponsive from './VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  ContentAreaContainerDescription,
  ContentAreaContainerItem,
  ContentAreaContainerTitle,
  WatchButton,
} from './styles';
import { BannerMainProps } from './types';

const BannerMain = ({ videoTitle, videoDescription, url }: BannerMainProps) => {

  const [youTubeID, bgUrl] = useMemo(() => {
    const youTubeID = getYouTubeId(url);
    return [youTubeID, `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`];
  }, [url]);

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>
            { videoTitle }
          </ContentAreaContainerTitle>

          <ContentAreaContainerDescription>
            {videoDescription}
          </ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive
            videoTitle={videoTitle}
            youtubeID={youTubeID}
          />
          <WatchButton> Assistir </WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
