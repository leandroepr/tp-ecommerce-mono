import { NextPage } from 'next';
import DefaultHeaderContent from '../components/default-header/default-header';
import {
  Body,
  Footer,
  Header,
  PublicLayout,
} from '../components/public-layout';

const MainRoute: NextPage = () => {
  return (
    <PublicLayout>
      <Header>
        <DefaultHeaderContent />
      </Header>
      <Body className="py-4">
        <span>body</span>
      </Body>
      <Footer className="text-center">
        <span>footer</span>
      </Footer>
    </PublicLayout>
  );
};

export default MainRoute;
