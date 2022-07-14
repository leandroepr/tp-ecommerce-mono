import { NextPage } from 'next';
import {
  Body,
  Footer,
  Header,
  PublicLayout,
} from '../components/public-layout';

const MainRoute: NextPage = () => {
  return (
    <PublicLayout>
      <Header className="py-4">
        <span>header</span>
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
