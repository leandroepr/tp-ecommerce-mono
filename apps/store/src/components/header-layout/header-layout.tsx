const Header = () => {
  return (
    <div className="flex container mx-auto bg-yellow-300 text-zinc-600 w-[1280px] h-28">
      <div className="flex justify-center py-4 pl-4 w-48 h-28">
        <div className="flex flex-col gap-1 w-40">
          <div className="flex">
            <img
              className="object-cover w-32 h-12"
              src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"
            />
          </div>
          <div className="text-xs w-38 py-1">
            <div className="flex flex-row">
              <div className="py-3 pr-2">i</div>
              <div>
                Enviar para Fulano, <strong>endereço Tal</strong>, número 20
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container pl-8 pr-2 py-4 w-[740px] h-28">
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              placeholder="Buscar categorias e produtos..."
              className="w-[700px] h-12 rounded placeholder:pl-4"
            />
          </div>
          <ul className="inline">
            <li className="inline pr-2">Todos</li>
            <li className="inline px-2">Roupas</li>
            <li className="inline px-2">Calçados</li>
            <li className="inline px-2">Utilitários</li>
            <li className="inline px-2">CRUD</li>
          </ul>
        </div>
      </div>

      <div className="flex container justify-center pt-8 w-96 h-28">
        <div className="flex container flex-col gap-6 w-80">
          <div className="py-1flex">
            <ul className="inline">
              <li className="inline pr-2">i</li>
              <li className="inline pr-2">
                Aproveite preços incríveis todos os dias
              </li>
            </ul>
          </div>
          <div className="pb-2">
            <ul className="inline">
              <li className="inline pr-2">i</li>
              <li className="inline pr-2">Usuário</li>
              <li className="inline px-2">Compras</li>
              <li className="inline px-2">Favoritos</li>
              <li className="inline px-3">i</li>
              <li className="inline px-3">i</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
