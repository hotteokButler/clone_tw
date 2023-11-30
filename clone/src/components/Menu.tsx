import { useNavigate } from 'react-router-dom';
import { auth } from '../app/firebase_init';
import { HiOutlineUserCircle, HiOutlineHome, HiLogout } from 'react-icons/hi';

import { MenuWrapper, MenuUl, MenuLi } from './styled';

function Menu() {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    auth.signOut();
    alert('로그아웃 되었습니다😊');
    navigate('/login');
  };

  const handleLink = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let id;
    if (event.currentTarget instanceof Element) {
      id = event.currentTarget.id;
    }
    console.log(id);
    if (id === 'go_home') {
      navigate('/');
    } else if (id === 'go_profile') {
      navigate('/profile');
    }
    {
      return;
    }
  };

  return (
    <MenuWrapper>
      <MenuUl>
        <MenuLi id="go_home" onClick={handleLink}>
          <HiOutlineHome />
          <span>Home</span>
        </MenuLi>
        <MenuLi id="go_profile" onClick={handleLink}>
          <HiOutlineUserCircle />
          <span>Profile</span>
        </MenuLi>
        <MenuLi id="logout" onClick={handleLogout}>
          <HiLogout />
          <span>Logout</span>
        </MenuLi>
      </MenuUl>
    </MenuWrapper>
  );
}

export default Menu;
