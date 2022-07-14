import Column from '../column';
import Row from '../row';
import SearchInput from '../search-input/search-input';
import HeaderLogo from './header-logo';

const DefaultHeaderContent = () => {
  return (
    <div className="flex flex-row text-stone-600 p-4 space-x-6">
      <Column className="w-44 space-y-4">
        <HeaderLogo className="mr-2" />
        <Row className="space-x-2 overflow-hidden">
          <div className="text-xs py-2">i</div>
          <div className="text-xs">
            Envie para Fulano, <strong>Endereço Tal, número tal</strong>
          </div>
        </Row>
      </Column>

      <Column className="space-y-4 grow">
        <SearchInput className="pt-1" placeholder="Pesquise por produtos..." />
        <Row className="space-x-6">
          <div>Todos</div>
          <div>Roupas </div>
          <div>Calçados</div>
          <div>Utilitários</div>
          <div>CRUD</div>
        </Row>
      </Column>

      <Column className="space-y-4">
        <Row className="gap-3">
          <div>i</div>
          <div>Aproveite preços incríveis todos os dias</div>
        </Row>

        <Row className="gap-5">
          <div>i</div>
          <div>Usuário</div>
          <div>Compras</div>
          <div>Favoritos</div>
          <div>i</div>
          <div>i</div>
        </Row>
      </Column>
    </div>
  );
};

export default DefaultHeaderContent;
