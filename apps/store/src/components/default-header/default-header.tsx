import { ReactComponent as BellIcon } from '../../../public/svgs/bell-icon.svg';
import { ReactComponent as ChevronDown } from '../../../public/svgs/chevron-down.svg';
import { ReactComponent as LightingBoltIcon } from '../../../public/svgs/lighting-bolt.svg';
import { ReactComponent as LocationMarkerIcon } from '../../../public/svgs/location-marker.svg';
import { ReactComponent as ShoppingCart } from '../../../public/svgs/shopping-cart.svg';
import { ReactComponent as UserCircleIcon } from '../../../public/svgs/user-circle-icon.svg';
import Column from '../column';
import Row from '../row';
import SearchInput from '../search-input/search-input';
import HeaderLogo from './header-logo';

const DefaultHeaderContent = () => {
  return (
    <div className="flex flex-row text-slate-500 p-2 space-x-7 ">
      <Column className="w-44 space-y-2">
        <HeaderLogo />
        <Row className="space-x-1 overflow-hidden">
          <div className="flex items-center justify-center">
            <LocationMarkerIcon />
          </div>
          <div className="text-xs">
            Envie para Fulano, <strong>Endereço Tal, número tal</strong>
          </div>
        </Row>
      </Column>

      <Column className="space-y-3 grow">
        <SearchInput placeholder="Pesquise por produtos..." />
        <Row className="flex space-x-6">
          <div>Todos</div>
          <div>Roupas </div>
          <div>Calçados</div>
          <div>Utilitários</div>
          <div>CRUD</div>
        </Row>
      </Column>

      <Column className="space-y-3">
        <Row className="space-x-3 h-10 items-center">
          <div>
            <LightingBoltIcon />
          </div>
          <div>Aproveite preços incríveis todos os dias</div>
        </Row>

        <Row className="space-x-3">
          <div>
            <UserCircleIcon />
          </div>
          <Row>
            <div>Usuário</div>
            <ChevronDown className="w-4 pt-1" />
          </Row>

          <Row>
            <div>Compras</div>
            <ChevronDown className="w-4 pt-1" />
          </Row>
          <Row>
            <div>Favoritos</div>
            <ChevronDown className="w-4 pt-1" />
          </Row>

          <div>
            <BellIcon />
          </div>

          <div className="flex flex-row">
            <ShoppingCart />
            <div className="text-sm text-white bg-red-500 rounded-full w-5 h-5 text-center justify-center mt-2">
              3
            </div>
          </div>
        </Row>
      </Column>
    </div>
  );
};

export default DefaultHeaderContent;