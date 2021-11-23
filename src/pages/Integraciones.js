/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Image, Icon, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DATA from '../data.json';

export default function Integraciones() {
  return (
    <>
      <h1>Integraciones</h1>
      <Card.Group>
        <Card>
          <Image
            src={`${process.env.PUBLIC_URL}/media/mercadolibre.png`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Mercadolibre</Card.Header>
            <Card.Meta>
              <span className="date">ATENE</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to="/mercadolibre" basic>
              Ver detalles
            </Button>
            <span style={{ color: DATA.services.ML.active ? 'green' : 'red' }}>
              <Icon name="plug" />{' '}
              {DATA.services.ML.active ? 'activo' : 'inactiva'}
            </span>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={`${process.env.PUBLIC_URL}/media/mercadolibre.png`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Vtex</Card.Header>
            <Card.Meta>
              <span className="date">ATENE</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to="/mercadolibre" basic>
              Ver detalles
            </Button>
            <span style={{ color: DATA.services.VT.active ? 'green' : 'red' }}>
              <Icon name="plug" />{' '}
              {DATA.services.VT.active ? 'activo' : 'inactiva'}
            </span>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={`${process.env.PUBLIC_URL}/media/mercadolibre.png`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Magento</Card.Header>
            <Card.Meta>
              <span className="date">ATENE</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to="/mercadolibre" basic>
              Ver detalles
            </Button>
            <span style={{ color: DATA.services.MG.active ? 'green' : 'red' }}>
              <Icon name="plug" />{' '}
              {DATA.services.MG.active ? 'activo' : 'inactiva'}
            </span>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}
