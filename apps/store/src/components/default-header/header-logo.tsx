import { ShoppingBagIcon } from '@heroicons/react/outline';
import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';
import Row from '../row';

export interface HeaderLogoProps {
  className?: string;
}
const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  return (
    <Row
      className={classNames(
        'w-28 h-10shrink-0 overflow-hidden items-center',
        props.className
      )}
    >
      <Row className="h-10 items-center">
        <ShoppingBagIcon className="h-6 text-blue-800 flex shrink-0 mr-1" />
        <div className="flex flex-col text-base text-blue-800 space-y-[-8px]">
          <div className="flex font-bold tracking-[0.15em]">COMPRE</div>
          <div className="flex tracking-[0.6em]">FÁCIL</div>
        </div>
      </Row>
    </Row>
  );
};

export default HeaderLogo;