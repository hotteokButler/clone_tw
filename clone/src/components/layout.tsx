import { Outlet } from 'react-router-dom';
import { Contents, MainWrapper } from './styled';
import Menu from './Menu';

function Layout() {
  return (
    <MainWrapper id="main-wrapper" $overflow={true}>
      <Menu/>
      {/* contents */}
      <Contents>
        <Outlet />
      </Contents>
    </MainWrapper>
  );
}

export default Layout;
