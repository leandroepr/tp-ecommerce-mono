import Image from 'next/image';
import SearchInput from '../search-input/search-input';

const HeaderLayout = () => {
  return (
    <div className="flex container bg-yellow-300 text-gray-500 w-[1280px] h-24">
      <div className="flex justify-center py-3 pl-4 w-48 h-28">
        <div className="flex flex-col w-40">
          <div className="flex flex-col">
            <div>
              <Image
                src="https://logoipsum.com/logoipsum.png"
                alt="logo"
                width={100}
                height={40}
              />
            </div>
          </div>
          <div className="text-xs w-38">
            <div className="flex flex-row">
              <div className="py-2 pr-2">i</div>
              <div>
                Enviar para Fulano, <strong>endereço Tal, número 20</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container pl-8 pr-2 pt-3 w-[740px] h-28">
        <div className="flex flex-col gap-3">
          <div>
            <SearchInput
              className=" w-[685px]"
              onSearch={(value) => console.log('Pesquisar por:', value)}
              placeholder="Pesquisar por produto..."
            />
          </div>
          <div className="flex flex-column gap-2 py-0">
            <div className="pr-2">Todos</div>
            <div className="px-2">Roupas</div>
            <div className="px-2">Calçados</div>
            <div className="px-2">Utilitários</div>
            <div className="px-2">CRUD</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center pt-2 mx-5">
        <div className="flex flex-row gap-3">
          <div>i</div>
          <div>Aproveite preços incríveis todos os dias</div>
        </div>

        <div className="flex flex-row gap-5">
          <div>i</div>
          <div>Usuários</div>
          <div>Compras</div>
          <div>Favoritos</div>
          <div>i</div>
          <div>i</div>
        </div>
      </div>

      {/* <div className="flex container justify-center pt-8 w-96 h-28">
        <div className="flex container flex-col gap-6 w-80">
          <div className="py-1 flex flex-row">
            <div>
              <div className="pr-2">i</div>
              <div className="pr-2">
                Aproveite preços incríveis todos os dias
              </div>
            </div>
          </div>
          <div className="flex flex-row pb-2">
            <div>
              <div className="inline pr-2">i</div>
              <div className="inline pr-2">Usuário</div>
              <div className="inline px-2">Compras</div>
              <div className="inline px-2">Favoritos</div>
              <div className="inline px-3">i</div>
              <div className="inline px-3">i</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderLayout;
