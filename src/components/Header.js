import React, { useContext } from 'react';
import { Button, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { AppContext } from '../Contexts/Provider';
import './Header.css';

function Header() {
  const [state, setState] = useContext(AppContext);
  function toggleOpenState() {
    setState({ ...state, isOpen: !state.isOpen });
  }

  return (
    <div id="header">
      <button
        className={`SidebarToggleBtn ${state.isOpen ? 'cerrar' : 'abrir'}`}
        onClick={toggleOpenState}
      >
        {state.isOpen ? <Icon name='angle left' ></Icon> : <Icon name='bars' ></Icon>	}
      </button>
    </div>
  );
}

export default Header;
