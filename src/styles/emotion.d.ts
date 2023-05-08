import '@emotion/react';
import { BaseTheme } from './Theme.type';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}