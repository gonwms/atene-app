import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import About from './pages/About';
import { ListAlt } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));


const routes = [{
  path: '/',
  name: 'Home',
  page: Home,
}, {
  path: '/about',
  name: 'About',
  page: About,
}];


function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const listItems = routes.map( (ruta, i) => {
        return(
          <Link key={i} to={ruta.path} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={ruta.name} />
          </ListItem>
        </Link>
        )
  })


  return (
    <div>
      <AppBar action={toggleDrawer('left', true)}></AppBar>
      <Router>
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '220px' }}
            anchor="left"
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            classes={{ paper: classes.drawerPaper }}
          >
            
            <List>
              {listItems}
            </List>
          </Drawer>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
