import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

function Mercadolibre() {
  return (
    <div className="mercadolibre">
      <div style={{ maxWidth: '1640px' }}>
        <h1>Mercadolibre</h1>

        <Form>
    
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="text"
              label="name"
              placeholder="nombre y apellido"
              name="name"
            />
            <Form.Input
              fluid
              type="text"
              label="name"
              placeholder="nombre y apellido"
              name="name"
            />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    </div>
  );
}

export default Mercadolibre;
