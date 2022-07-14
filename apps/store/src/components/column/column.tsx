import { classNames } from '@tp-ecommerce-mono/utils';

export type ColumnProps = React.HTMLAttributes<HTMLDivElement>;

const Column: React.FC<ColumnProps> = ({ className, ...props }) => (
  <div className={classNames('flex flex-col', className)} {...props} />
);

export default Column;
