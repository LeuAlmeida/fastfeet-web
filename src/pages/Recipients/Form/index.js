import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { SaveButton, BackButton } from '~/components/utils/Button';
import SimpleInput from '~/components/Form/SimpleInput';
import MaskInput from '~/components/Form/MaskInput';
import HeaderForm from '~/components/Form/HeaderForm';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, UnForm } from './styles';

export default function RecipientsForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  useEffect(() => {
    async function loadInitialData() {
      if (id) {
        const response = await api.get(`/recipients?recipientId=${id}`);

        const {
          name,
          address,
          number,
          complement,
          city,
          state,
          cep,
        } = response.data.recipient;

        formRef.current.setData({
          name,
          address,
          number,
          complement,
          city,
          state,
          cep: cep
            .toString()
            .match(/.{1,5}/g)
            .join('-'),
        });

        // formRef.current.setData(response.data.recipient);
      }
    }
    loadInitialData();
  }, [id]);

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        address: Yup.string().required('A rua é obrigatória'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string().notRequired(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        cep: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const cep = data.cep.replace(/-/g, '');

      if (id) {
        try {
          await api.put(`/recipients/${id}`, {
            name: data.name,
            address: data.address,
            number: data.number,
            complement: data?.complement,
            city: data.city,
            state: data.state,
            cep,
          });
          toast.success('Destinatário editado com sucesso!');
          history.push('/recipients');
        } catch (err) {
          toast.error('Houve um erro ao editar este destinatário.');
        }
      } else {
        try {
          await api.post('/recipients', {
            name: data.name,
            address: data.address,
            number: data.number,
            complement: data?.complement,
            city: data.city,
            state: data.state,
            cep,
          });
          toast.success('Destinatário cadastrado com sucesso!');
        } catch (err) {
          toast.error('Houve um erro ao cadastrar este destinatário.');
        }
      }

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de destinatário">
          <BackButton />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <SimpleInput
            label="Nome"
            name="name"
            type="text"
            placeholder="Nome completo do destinatário"
          />
          <div>
            <SimpleInput
              label="Rua"
              name="address"
              type="text"
              placeholder="Rua do destinatário"
            />
            <SimpleInput
              label="Número"
              name="number"
              type="number"
              placeholder="Número da casa"
            />
            <SimpleInput
              label="Complemento"
              name="complement"
              placeholder="Complemento residencial"
              type="text"
            />
          </div>
          <div>
            <SimpleInput
              label="Cidade"
              name="city"
              type="text"
              placeholder="Cidade do destinatário"
            />
            <SimpleInput
              label="Estado"
              name="state"
              type="text"
              placeholder="Estado do destinatário"
            />
            <MaskInput
              label="CEP"
              name="cep"
              type="text"
              maskPlaceholder={null}
              placeholder="_____-___"
              mask="99999-999"
              onKeyPress={e =>
                e.key === 'Enter' ? formRef.current.submitForm() : null
              }
            />
          </div>
        </UnForm>
      </Content>
    </Container>
  );
}

RecipientsForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
