import React from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default function SidebarInner(){
	const [visible, setVisible] = React.useState(true)
	return(
		
		
    <Sidebar
      as={Menu}
      icon='labeled'
      inverted
      vertical
      visible = {visible}
			Uncover
			animation ='push'
			onHide={() => setVisible(false)}
      width='thin'
    >
      <Menu.Item as= {Link} name='home' to='/'>
        <Icon size='mini'  name='home' />
        <span >asdasd</span>
      </Menu.Item>
      <Menu.Item as= {Link} name='About' to='about'>
        <Icon size='mini'  name='info circle' />
        Games
      </Menu.Item>
      <Menu.Item as= {Link} name='Integraciones' to='/integraciones'>
        <Icon size='mini'  name='plug' />
        Channels
      </Menu.Item>
    </Sidebar>
	)

}
