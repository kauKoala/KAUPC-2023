import React, { ReactNode } from 'react';
import * as S from './AppContent.style';

export type ContentProps = {
  children?: ReactNode;
};

export const AppContent = ({ children }: ContentProps) => {
  return <S.Container>{children}</S.Container>;
};