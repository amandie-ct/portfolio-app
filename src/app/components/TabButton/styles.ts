// 'use client'
import styled, { css } from 'styled-components';


export interface TabButtonStyleProps {
  active?: boolean;
}

export const TabButton = styled.div<TabButtonStyleProps>`
  ${(props) =>
    props.active &&
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



// import { ITabButtonProps } from '.';export interface TabButtonStyleProps {
//   active?: string
// }

// export const TabButton = styled.div<TabButtonStyleProps>`
//   ${(props) =>
//     props.active &&
//     css`
//       border-bottom: 2px solid #d8a47a;
//       color: #fff;
//       font-weight: 500;
//     `}

//   margin-right: 4rem;
//   padding-bottom: 0.5rem;
//   text-decoration: none;
//   cursor: pointer;
// `;