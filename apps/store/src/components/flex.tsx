import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

type FlexProps = {
  children: React.ReactNode;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({ children, className }) => {
  return (
    <div className={classNames('flex justify-center', className)}>
      {children}
    </div>
  );
};

export default Flex;
