import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*pages*/
import Home from '../pages/Home'
import Integraciones from '../pages/Integraciones'
import About from '../pages/About'
import Mercadolibre from '../pages/Mercadolibre'

export default function Routes(){
	return (
		<Switch>
					 <Route path="/" exact component={Home} />
					 <Route path="/integraciones" exact component={Integraciones} />
					 <Route path="/about" exact component={About} />
					 <Route path="/mercadolibre" exact component={Mercadolibre} />
		</Switch>
	)
}
