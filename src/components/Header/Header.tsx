import { FC } from 'react';
import './Header.scss';
import UserLocation from '@components/UserLocation/UserLocation';

const Header: FC = () => {

  return (
    <header className='header'>
      <h1 className='title'>Weather Forecast</h1>
      <UserLocation />
    </header>
  );
};

export default Header;
