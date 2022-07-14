import { ShoppingBagIcon } from '@heroicons/react/outline';
import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

export interface HeaderLogoProps {
  className?: string;
}
const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  return (
    <div
      className={classNames(
        'w-28 h-10 flex shrink-0 flex-row border overflow-hidden items-center',
        props.className
      )}
    >
      <ShoppingBagIcon className="w-6 h-6 text-blue-800 flex shrink-0 mr-2" />
      <div className="">Compre Fácil</div>
    </div>
  );
};

export default HeaderLogo;
