const CategoryLateralMenuLayout = () => {
  return (
    <div className="flex h-fit bg-gray-100 text-gray-500 pt-1 text-lg">
      <div className="flex flex-col px-2 gap-9">
        <div className="flex flex-col gap-3">
          <h1 className="text-base text-gray-600">Calçados, Roupas e Bolsas</h1>

          <section>
            <h2 className="font-bold text-gray-700 text-2xl pt-1">Todos</h2>
            <div>1.476 resultados</div>
          </section>
        </div>

        <section>
          <h2 className="font-bold text-gray-700 text-xl">Gênero</h2>
          <ul className="flex flex-col gap-2 pt-1">
            <li>
              <strong className=" font-medium">Feminino</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Masculino</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Sem gênero</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Meninas</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Meninos</strong>(123)
            </li>
            <li>
              <strong className=" font-medium">Bebês</strong> (123)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-700 text-xl">Categorias</h2>
          <ul className="flex flex-col gap-2 pt-1">
            <li>
              <strong className=" font-medium">Botas</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Sapatos</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Sandalhas</strong>(123)
            </li>
            <li>
              <strong className=" font-medium">Sapatênis</strong> (123)
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="font-bold text-gray-700 text-xl">Pagamento</h2>
          <ul className="flex flex-col gap-2 pt-1">
            <li>
              <strong className=" font-medium">Com juros</strong> (123)
            </li>
            <li>
              <strong className=" font-medium">Sem juros</strong> (123)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CategoryLateralMenuLayout;
