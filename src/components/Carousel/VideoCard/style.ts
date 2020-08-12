import styled from 'styled-components';

import { COLORS } from '../../../style';

import { VideoCardContainerProps } from './types';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: ${COLORS.white};
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }: VideoCardContainerProps) => `url(${url})`};
  border-color: ${({ categoryColor } : VideoCardContainerProps) => categoryColor || COLORS.red};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
