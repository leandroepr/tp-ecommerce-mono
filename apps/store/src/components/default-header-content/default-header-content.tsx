import SearchInput from '../search-input/search-input';

const DefaultHeaderContent = () => {
  return (
    <div className="bg-yellow-300 flex flex-row text-stone-600">
      <div className="flex flex-col px-3 grow-[0]">
        <div className="text-sm py-4">Logo placeholder</div>

        <div className="flex container flex-row gap-1 py-1 w-[150px]">
          <div className="text-xs py-2">i</div>
          <div className="text-xs">
            Envie para Fulano, <strong>Endereço Tal, número tal</strong>
          </div>
        </div>
      </div>

      <div className="flex grow-[10] flex-col py-2 px-3 gap-3">
        <div className="pt-1">
          <SearchInput />
        </div>
        <div className="flex flex-row gap-6">
          <div>Todos</div>
          <div>Roupas </div>
          <div>Calçados</div>
          <div> Utilitários</div>
          <div>CRUD</div>
        </div>
      </div>

      <div className="flex grow-[0] flex-col px-6 py-3 mt-2 gap-4">
        <div className="flex flex-row gap-3">
          <div>i</div>
          <div>Aproveite preços incríveis todos os dias</div>
        </div>

        <div className="flex flex-row gap-5">
          <div>i</div>
          <div>Usuário</div>
          <div>Compras</div>
          <div>Favoritos</div>
          <div>i</div>
          <div>i</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultHeaderContent;
