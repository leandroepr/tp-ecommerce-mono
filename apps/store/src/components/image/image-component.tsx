import React from 'react';
import Column from '../column/column';

export interface ImageComponentProps {
  className?: string;
  src: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  className,
  alt = '',
  ...props
}) => {
  return (
    <Column className={className}>
      <img className="h-fit w-fit" alt={alt} {...props} />
    </Column>
  );
};

export default ImageComponent;
