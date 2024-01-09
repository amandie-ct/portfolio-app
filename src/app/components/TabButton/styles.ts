import styled, { css } from 'styled-components';
import { ITabButtonProps } from '.';

export const TabButton = styled.div<Pick<ITabButtonProps, 'active'>>`
  ${($props) =>
    $props.active &&
    css`
      border-bottom: 2px solid #d8a47a;
      color: #fff;
      font-weight: 500;
    `}

  margin-right: 4rem;
  padding-bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`;
