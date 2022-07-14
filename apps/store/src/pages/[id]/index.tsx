import { NextPage } from 'next';
import Flex from '../../components/flex';
import Grid from '../../components/grid';
import Placeholder from '../../components/placeholder';
import {
  Body,
  Footer,
  Header,
  PublicLayout,
} from '../../components/public-layout';

const CategoryPage: NextPage = () => {
  return (
    <PublicLayout>
      <Header className="py-4">
        <span>header</span>
      </Header>
      <Body className="py-2">
        <Placeholder height="50" width="800" text="Buscas Relacionadas" />
        <Flex className="flex-row justify-between">
          <Placeholder height="600" width="300" text="Menu Lateral" />
          <Grid>
            <Placeholder height="500" width="300" text="Card" />
            <Placeholder height="500" width="300" text="Card" />
            <Placeholder height="500" width="300" text="Card" />
            <Placeholder height="500" width="300" text="Card" />
            <Placeholder height="500" width="300" text="Card" />
            <Placeholder height="500" width="300" text="Card" />
          </Grid>
        </Flex>
      </Body>
      <Footer className="text-center">
        <span>footer</span>
      </Footer>
    </PublicLayout>
  );
};

export default CategoryPage;
