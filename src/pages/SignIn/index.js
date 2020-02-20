/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>Seu e-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <label>Sua senha</label>
        <Input name="password" type="password" placeholder="********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}

export default SignIn;
