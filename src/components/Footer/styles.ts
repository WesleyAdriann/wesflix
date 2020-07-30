import styled from 'styled-components';

import { COLORS } from '../../style';

export const FooterBase = styled.footer`
  background: ${COLORS.black};
  border-top: 2px solid ${COLORS.primary};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: ${COLORS.white};
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
