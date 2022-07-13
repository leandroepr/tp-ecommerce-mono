import Link from 'next/link';

const RelatedSearch: React.FC = () => {
  const relatedList = [
    'roupas femininas',
    'camisas masculinas',
    'body feminino',
    'cropped',
    'conjuntos femininos',
  ];

  return (
    <div className="flex">
      <h3 className="font-bold text-gray-700">Buscas relacionadas:</h3>
      {relatedList.map((relatedItem, i) => (
        <Link key={relatedItem} href={relatedItem}>
          <div>
            <a className="ml-2 cursor-pointer text-gray-500 font-normal">
              {relatedItem}
            </a>
            <span className="ml-2">
              {i < relatedList.length - 1 ? '-' : null}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedSearch;
