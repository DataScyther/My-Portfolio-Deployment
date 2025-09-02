import React from 'react';

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'className' | 'children'>;

type GradientTextComponent = <
  E extends React.ElementType = 'span'
>(props: PolymorphicProps<E>) => React.ReactElement | null;

const GradientText: GradientTextComponent = ({
  as,
  className = '',
  children,
  ...rest
}) => {
  const Component = (as || 'span') as React.ElementType;
  return (
    <Component className={`brand-headline-gradient ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default GradientText;