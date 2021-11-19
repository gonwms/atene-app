import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import { BrowserRouter as Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

export default function MenuList() {

	const classes = useStyles();

	return (
	<List>
				<Link to='/' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Home'} />
					</ListItem>
				</Link>
				<Link to='/about' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={'About'} />
					</ListItem>
				</Link>
	</List>

	);
}
