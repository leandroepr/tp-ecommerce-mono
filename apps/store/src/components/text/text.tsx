import { classNames } from '@tp-ecommerce-mono/utils';

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  textType?: keyof typeof textTypeMap;
  tag?: keyof typeof tagStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  textType = 'noStyle',
  tag = 'not',
}) => {
  return (
    <p
      className={classNames(
        'relative',
        textTypeMap[textType],
        tagStyle[tag],
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;

const textTypeMap = {
  noStyle: '',
  normal: 'text-slate-800',
  cardCurrency: 'text-slate-800 text-xl font-semibold',
  cardCents: 'text-slate-800 text-xs leading-6 font-medium',
  cardInstallment: 'text-sm text-slate-500',
  expandedCardInstallment: 'text-slate-800 text-xs',
  productName: 'text-gray-500 tracking-tight text-xs',
};

const tagStyle = {
  not: '',
  blue: 'bg-sky-100 w-fit rounded-sm px-1 text-blue-500',
  gray: 'bg-gray-200 w-fit rounded-sm px-1 text-gray-500',
};
