import classNames from 'classnames';
import { ICssClasses } from 'interfaces';

interface IContainerProps {
  className?: string | ICssClasses;
  children: React.ReactElement | React.ReactElement[];
}


export const Container = ({ className, children }: IContainerProps) => {
  const cssClasses = classNames(className);

  return (
    <div className={cssClasses}>
      {children}
    </div>
  );
};
