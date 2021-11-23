import React from 'react';
import { Sidebar } from 'semantic-ui-react'
import SidebarInner from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';

export default function App() {
  return (
   
		<>
		<Header/>
		<Sidebar.Pushable>
					<SidebarInner />
				<Sidebar.Pusher>
				<Main />
				</Sidebar.Pusher>
		</Sidebar.Pushable>
		</>
			

  );
}
