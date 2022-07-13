import { NextPage } from 'next';
import HeaderLayout from '../components/header-layout/header-layout';

const TestComponent: NextPage = () => {
  return (
    <div className="mx-auto">
      <HeaderLayout />
    </div>
  );
};

export default TestComponent;
