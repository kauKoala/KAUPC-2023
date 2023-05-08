export type AsProp<C extends React.ElementType> = {
    as?: C;
  };
  
  export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
    JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;
  
  export type ExtendableProps<ExtendedProps = object, OverrodeProps = object> = OverrodeProps &
    Omit<ExtendedProps, keyof OverrodeProps>;
  
  export type InheritableProps<C extends React.ElementType, Props = object> = ExtendableProps<
    PropsOf<C>,
    Props
  >;
  
  export type PolymorphicProps<C extends React.ElementType, Props = object> = InheritableProps<
    C,
    Props & AsProp<C>
  >;