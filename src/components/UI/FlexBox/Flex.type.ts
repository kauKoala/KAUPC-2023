export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type Wrap = 'nowrap' | 'wrap';
export type Grow = number;
export type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
export type Align =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type FlexVariant =
  | 'rowStart'
  | 'rowCenter'
  | 'rowEnd'
  | 'columnStart'
  | 'columnCenter'
  | 'columnEnd';

export type StyleConfigKeys = 'direction' | 'wrap' | 'grow' | 'justify' | 'align';

export type FlexStyle = {
  direction: Direction;
  wrap: Wrap;
  grow: Grow;
  justify: Justify;
  align: Align;
};

export type FlexStyleConfig = { [T in StyleConfigKeys]: FlexStyle[T] };

export type CustomFlexStyleConfig = {
  [T in StyleConfigKeys]?: FlexStyle[T];
};