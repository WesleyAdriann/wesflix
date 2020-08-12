import styled, { css } from "styled-components";

import { COLORS } from '../../style';

import { ButtonProps } from './types'

const Button = styled.button<ButtonProps>`
  color: ${COLORS.white};
  border: 1px solid ${COLORS.white};
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${({ withResponsive }) => withResponsive && css`
    @media screen and (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${COLORS.primary};
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  `}
`;

export default Button;
