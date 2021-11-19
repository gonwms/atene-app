import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Integraciones() {
  const classes = useStyles();
  return (
    <div className="home">
      <Container style={{ maxWidth: '1640px' }}>
        <h1>Integraciones</h1>

        <div style={{ display:'flex', justifyContent:'space-between', maxWidth:'1200px', flexWrap:'wrap'}}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Integración
            </Typography>
            <Typography variant="h5" component="h2">
              Mercado libre
            </Typography>

            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Integración
            </Typography>
            <Typography variant="h5" component="h2">
              Magento
            </Typography>

            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Integración
            </Typography>
            <Typography variant="h5" component="h2">
              Vtex
            </Typography>

            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
        </div>
      </Container>
    </div>
  );
}

export default Integraciones;
