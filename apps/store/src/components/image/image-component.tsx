import { classNames } from '@tp-ecommerce-mono/utils';
import React from 'react';
import Column from '../column/column';

export interface ImageComponentProps {
  className?: string;
  src?: string;
  alt?: string;
  noSrcAlt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  className,
  src,
  alt = '',
  noSrcAlt = '',
  ...props
}) => {
  return (
    <Column className={classNames('items-center justify-center', className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="h-fit w-fit max-h-full max-w-full"
          src={src}
          alt={alt}
          {...props}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={noSrcAlt} alt="Erro" />
      )}
    </Column>
  );
};

export default ImageComponent;
