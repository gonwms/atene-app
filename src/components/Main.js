import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Routes from '../Routes/Routes';



export default function Main(){
	return(
			<div style={{padding:'20px', minHeight:'100vh'}}>
				<Routes/>
				
			</div>
		)
}