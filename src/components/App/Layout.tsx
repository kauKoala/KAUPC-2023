import styled from '@emotion/styled';
//import { Flex } from '../UI/FlexBox';
import React, { ReactNode } from 'react';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>{children}</main>
  );
};