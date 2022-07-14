import {} from '@nestjs/common';
import { Body, Footer, Header, PublicLayout } from 'components/public-layout';
import React from 'react';

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
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

export default HomeScreen;
