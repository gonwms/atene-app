import React, { useContext } from 'react';
import DATA from '../data.json'
import { 
Button, 
Icon, 
// Image, 
// Menu,
// Segment,
// Sidebar 
} from 'semantic-ui-react';
import { UIContext } from '../Contexts/Provider';
import './Header.css';

function Header() {
  const [state, setState] = useContext(UIContext);
  function toggleOpenState() {
    setState({ ...state, isOpen: !state.isOpen });
  }

  return (
    <div id="header">
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
      <Button className='usuario'><Icon name="user"/>{DATA.user.name}</Button>
    </div>
  );
}

export default Header;
