import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

export type FlexProps = React.HTMLAttributes<HTMLDivElement>;
const Flex: React.FC<FlexProps> = ({ className, ...props }) => {
  return <div className={classNames('flex', className)} {...props} />;
};

export default Flex;
