import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

type FooterComponentProps = {
  className?: string;
  label?: string;
  id?: string;
};
const FooterComponent: React.FC<FooterComponentProps> = ({
  label = 'Copyright © 2022 Trainees 80 Lines.',
  className,
}) => {
  return (
    <div
      className={classNames(
        'justify-center max-w-max text-xs text-opacity-1 text-gray-200',
        className
      )}
    >
      {label}
    </div>
  );
};

export default FooterComponent;
