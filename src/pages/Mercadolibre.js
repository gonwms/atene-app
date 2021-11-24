import React, { useRef } from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const planOptions = [
  { key: 'p', text: 'Pro', value: 'Pro' },
  { key: 'e', text: 'Enterprise', value: 'Enterprise' },
  { key: 'o', text: 'Other', value: 'other' },
];

function Mercadolibre() {
  const formik = useFormik({
    initialValues: {
      name: '',
      token: '',
      plan: '',
      password: '',
      legal: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      name    : Yup.string().required('El campo es requerido'),
      token   : Yup.string().required('El token es requerido'),
      plan    : Yup.string().required('El campo es requerido'),
      password: Yup.string().required('La contraseña es requerido'),
      legal   : Yup.boolean().oneOf([true], 'Debe Aceptar las conficiones'),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const handleDropdownChange = (event, data) => {
    // console.log(data);
    console.log(formik.values);
    formik.setFieldValue(data.name, data.value);
  };
  const handleCheckboxChange = (event, data) => {
    formik.setFieldValue(data.name, data.checked);
    // return data.checked ? formik.setFieldValue(data.name, 'checked') : formik.setFieldValue(data.name, '');
  };

  return (
    <div className="mercadolibre">
      <div style={{ maxWidth: '1640px' }}>
        <h1>Mercadolibre</h1>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              label="name"
              placeholder="name"
              name="name"
              onChange={formik.handleChange}
              error= {formik.errors.name}
              value={formik.values.name}
            />
            <Form.Input
              type="text"
              label="token"
              placeholder="XXXXXXXXX-XXXXXXXXXXXXX-XXXXXXXXXX"
              name="token"
              onChange={formik.handleChange}
              error={formik.errors.token && true}
              // value={formik.values.token}
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="password"
              name="password"
              onChange={formik.handleChange}
              error={formik.errors.password && true}
              value={formik.values.password}
            />
            <Form.Select
              label="Plan"
              options={planOptions}
              placeholder="plan"
              name="plan"
              onChange={handleDropdownChange}
              error={formik.errors.plan && true}
              value={formik.values.plan}
            ></Form.Select>
          </Form.Group>
          <Form.Checkbox
            label="Estoy de acuerdo con los Términos y Condiciones"
            name="legal"
            onChange={handleCheckboxChange}
            error={formik.errors.legal && true}
            checked={formik.values.legal}
          />
          <Form.Button type="submit" color="orange">
            Guardar
          </Form.Button>
          <Form.Button type="button" onClick={formik.handleReset}>
            Limpiar formulario
          </Form.Button>
        </Form>
      </div>
    </div>
  );
}

export default Mercadolibre;
