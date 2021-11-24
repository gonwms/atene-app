import React, { useContext } from 'react';
import Data from '../data.json'
import { 
Button, 
Icon, 
Image
} from 'semantic-ui-react';
import { UIContext } from '../contexts/Provider';
import './Header.css';

function Header() {
  const [state, setState] = useContext(UIContext);
  function toggleOpenState() {
    setState({ ...state, isOpen: !state.isOpen });
  }

  return (
    <div id="header">
      <div className="col1">
        <button
          className={`SidebarToggleBtn ${state.isOpen ? 'cerrar' : 'abrir'}`}
          onClick={toggleOpenState}
        >
          {state.isOpen ? (
            <Icon name="angle left"></Icon>
          ) : (
            <Icon name="bars"></Icon>
          )}
        </button>
        <Image className="logo" src={`${process.env.PUBLIC_URL}/media/logo-atene-imagen.png`} alt="" />
      </div>
      <Button className='usuario'><Icon name="user"/>{Data.user.name}</Button>
    </div>
  );
}

export default Header;
