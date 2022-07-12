import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';

type FooterProps = {
  className?: string;
  label?: string;
  id?: string;
};
const Footer: React.FC<FooterProps> = ({
  label = 'Copyright © 2022 Trainees 80 Lines.',
  className,
}) => {
  return (
    <footer
      className={classNames(
        '.justify-center .max-w-max .text-xs .text-opacity-5 .text-gray-200',
        className
      )}
    >
      {label}
    </footer>
  );
};

export default Footer;
