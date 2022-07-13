import { classNames } from '@tp-ecommerce-mono/utils';
import { ReactNode } from 'react';

export interface TextProps {
  className?: string;
  children?: ReactNode;
  type?: keyof typeof typeMap;
}

const Text: React.FC<TextProps> = ({
  className,
  type = 'normal',
  ...props
}) => {
  return <span className={classNames(typeMap[type], className)} {...props} />;
};

export default Text;

const typeMap = {
  normal: 'text-slate-800',
  cardCurrency: 'text-slate-800 text-2xl',
  cardCents: 'text-slate-800 text-xs leading-6',
  cardInstallment: 'text-sm text-slate-500',
};
