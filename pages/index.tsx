import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';

const HomePage: NextPage<any> = (props) => {
  return (
    <Default width={props.width} height={props.height} pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
