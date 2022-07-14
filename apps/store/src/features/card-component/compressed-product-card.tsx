import { classNames } from '@tp-ecommerce-mono/utils';
import Column from '../../components/column/column';
import ImageComponent from '../../components/image/image-component';
import Row from '../../components/row/row';
import Text from '../../components/text/text';

export interface CompressedProductCardProps {
  className?: string;
  productPrice?: number;
  installment?: { quantity: number; value: number };
  image?: { src?: string; alt?: string };
}

const CompressedProductCard: React.FC<CompressedProductCardProps> = ({
  className,
  productPrice = 0,
  installment = {
    quantity: 0,
    value: 0,
  },
  image = {
    src: '',
    alt: '',
  },
}) => {
  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString();
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2);
    return { currency, cents };
  };
  const formatInstallment = ({ quantity, value }: typeof installment) =>
    `em ${quantity}x de ${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`;

  const splittedProductPrice = splitProductPrice(productPrice);
  const formattedInstallment = formatInstallment(installment);
  const showingCurrency = 'R$';

  return (
    <Column
      className={classNames(
        'bg-white shadow border rounded-md w-56 h-80 overflow-hidden',
        className
      )}
    >
      <ImageComponent
        className="h-56 w-56"
        src={image.src}
        alt={image.alt}
        noSrcAlt="https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg"
      />
      <Column className="border-t flex-grow justify-center pl-6">
        <Row>
          <Text type="cardCurrency" className="mr-1">
            {showingCurrency}
          </Text>
          <Text type="cardCurrency" className="mr-[2px]">
            {splittedProductPrice.currency}
          </Text>
          {Number(splittedProductPrice.cents) > 0 && (
            <Text type="cardCents">{splittedProductPrice.cents}</Text>
          )}
        </Row>
        {installment.value > 0 && installment.quantity > 0 && (
          <Text type="cardInstallment">{formattedInstallment}</Text>
        )}
      </Column>
    </Column>
  );
};

export default CompressedProductCard;
