import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={classNames('grid grid-cols-3 gap-4', className)}>
    {children}
    </div>;
};

export default Grid;
