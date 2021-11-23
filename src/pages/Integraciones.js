/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Image, Icon, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <span color="green">
              <Icon name="plug" />
              active
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
            <Card.Header>Mercadolibre</Card.Header>
            <Card.Meta>
              <span className="date">ATENE</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to="/mercadolibre" basic>
              Ver detalles
            </Button>
            <span color="green">
              <Icon name="plug" />
              active
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
            <Card.Header>Mercadolibre</Card.Header>
            <Card.Meta>
              <span className="date">ATENE</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to="/mercadolibre" basic>
              Ver detalles
            </Button>
            <span color="green">
              <Icon name="plug" />
              active
            </span>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}
