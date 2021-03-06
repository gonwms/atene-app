import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

import AppBar from './components/AppBar';

import Home from './pages/Home';
import About from './pages/About';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar></AppBar>
      <Router>
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '220px' }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home'} />
                </ListItem>
              </Link>
              <Link to="/about" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={'About'} />
                </ListItem>
              </Link>
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
