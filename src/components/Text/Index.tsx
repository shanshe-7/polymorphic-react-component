import React from "react";

type TextProps<E extends React.ElementType> = {
  as?: E;
};

type Props<E extends React.ElementType> = React.PropsWithChildren<
  TextProps<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof TextProps<E>>;

export const Text = <E extends React.ElementType = "p">({
  as,
  children,
  ...restProps
}: Props<E>) => {
  const Component = as || "p";
  return <Component {...restProps}>{children}</Component>;
};
