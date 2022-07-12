import React from 'react';
import Flex from '../components/flex';
import Placeholder from '../components/placeholder';


export function Index() {
  return (
    <React.Fragment>
      <Flex className="my-8">
        <Placeholder width='1280' height='240' text='Carousel'/>
      </Flex>
      <Flex className="my-8">
        <Placeholder width='1280' height='240' text='Carousel'/>
      </Flex>
      <Flex className="my-8">
        <Placeholder width='1280' height='240' text='Carousel'/>
      </Flex>
    </React.Fragment>
  );
}

export default Index;
