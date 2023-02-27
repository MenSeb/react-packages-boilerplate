import * as React from 'react';

type MainTypes = {
  children: React.ReactNode;
};

export default function Main({ children }: MainTypes) {
  return <main>{children}</main>;
}
