import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

export type RowProps = React.HTMLAttributes<HTMLDivElement>;
const Row: React.FC<RowProps> = ({ className, ...props }) => {
  return <div className={classNames('flex flex-row', className)} {...props} />;
};

export default Row;
