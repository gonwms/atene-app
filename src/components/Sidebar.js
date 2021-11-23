import React, { useContext } from 'react';
import { AppContext } from '../Contexts/Provider';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


export default function SidebarInner() {
  const [state, setState] = useContext(AppContext);

  function closeSidebar() {
    setState({ isOpen: false });
  }

  return (
    <Sidebar
      className='sidebar'
      as={Menu}
      // icon="labeled"
      // inverted
      vertical
      visible={state.isOpen}
      Uncover
      animation="push"
      // onHide={closeSidebar}
      // width="large"
    >
      <Menu.Item as={Link} name="home" to="/">
        <span>
          <Icon size='large' name="home" />
          Inicio
        </span>
      </Menu.Item>
      <Menu.Item as={Link} name="About" to="about">
        <span>
          <Icon size='large' name="info circle" />
          info
        </span>
      </Menu.Item>
      <Menu.Item as={Link} to="/integraciones">
        <span>
          <Icon size='large' name="plug" />
          Integraciones
        </span>
      </Menu.Item>
    </Sidebar>
  );
}
