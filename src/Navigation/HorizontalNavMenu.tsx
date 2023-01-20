import React from 'react';
import { ICssClasses } from '../interfaces';
import classNames from 'classnames';
import './styles.css';

interface INavMenuProps {
  className?: string | ICssClasses;
  children: React.ReactElement[];
}

const HorizontalNavMenu = ({ className, children }: INavMenuProps) => {
  const cssClasses = classNames(className);

  return (
    <div className={cssClasses}>
      {children}
    </div>
  );
};

export default HorizontalNavMenu;
