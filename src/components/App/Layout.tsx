import styled from '@emotion/styled';
//import { Flex } from '../UI/FlexBox';
import React, { ReactNode } from 'react';
import { AppHeader } from './AppHeader/AppHeader';
import { AppContent } from './AppContent/AppContent';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />
      <Root>
        <AppContent>{children}</AppContent>
      </Root>
    </>
  );
};

const Root = styled.div`
  height: 300%;

  & {
    background: linear-gradient(192deg, #E2E2E2, #D3D3D3);
    background-size: 400% 400%;
    -webkit-animation: animateBackground 5s ease infinite;
    -moz-animation: animateBackground 5s ease infinite;
    animation: animateBackground 5s ease infinite;
    z-index: -2;
  }

  @-webkit-keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
  @-moz-keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
  @keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
`;