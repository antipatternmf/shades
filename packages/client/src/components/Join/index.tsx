import { Children, Fragment, type ReactNode } from 'react';

type JoinProps = {
  children: ReactNode;
  separator: ReactNode;
};

export default function Join({ children, separator }: JoinProps) {
  const arrayOfChildren = Children.toArray(children);
  const filteredChildren = arrayOfChildren.filter((child) => !!child);

  return (
    <>
      {filteredChildren.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < filteredChildren.length - 1 && separator}
        </Fragment>
      ))}
    </>
  );
}
