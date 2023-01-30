import React from 'react';
import classNames from 'classnames';
import { ICssClasses } from '../interfaces'

interface INavOptionProps {
  url: string;
  newTab?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  className?: string | ICssClasses;
  children?: string | React.ReactElement | React.ReactElement[];
};

export const Nav = ({ url, newTab, startIcon, endIcon, className, children }: INavOptionProps) => {
  const cssClasses = classNames(className);

  const start = startIcon || '';
  const end = endIcon || '';
  return (
    <a href={url} target={ newTab ? '_blank' : ''} className={cssClasses}>
      {start}
      {children}
      {end}
    </a>
  );
};
