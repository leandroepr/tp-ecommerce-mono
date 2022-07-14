import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

export interface BodyProps {
  className?: string;
  children?: React.ReactNode;
}
const Body: React.FC<BodyProps> = (props) => {
  return (
    <main className="flex flex-col flex-1">
      <div className={classNames('container mx-auto', props.className)}>
        {props.children}
      </div>
    </main>
  );
};

export default Body;