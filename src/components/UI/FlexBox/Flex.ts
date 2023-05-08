/** @jsxImportSource @emotion/react */
import React, { Component, useMemo } from 'react';
import { PolymorphicProps } from '@/types/type.props';
import { CustomFlexStyleConfig, FlexVariant, StyleController } from './index';

export type FlexProps = { flex: FlexVariant; custom?: CustomFlexStyleConfig };
export type Props<C extends React.ElementType> = PolymorphicProps<C, FlexProps>;

export const Flex = <C extends React.ElementType>({
  as,
  children,
  flex,
  custom,
  ...other
}: Props<C>) => {
  const Component = as || 'div';

  const style = useMemo(() => StyleController(flex, custom), [flex, custom]);

  return (
    <Component {...other} css={style}>
        {children}
    </Component>
  );
};