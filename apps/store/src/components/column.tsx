import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

export type ColumnProps = React.HTMLAttributes<HTMLDivElement>;
const Column: React.FC<ColumnProps> = ({ className, ...props }) => {
  return <div className={classNames('flex flex-col', className)} {...props} />;
};

export default Column;
