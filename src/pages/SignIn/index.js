import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="SEU E-MAIL"
          type="email"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          label="SUA SENHA"
          type="password"
          placeholder="*************"
        />

        {/* <Button type="submit">{loading ? 'Carregando...' : 'Acessar'}</Button> */}
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}

export default SignIn;
