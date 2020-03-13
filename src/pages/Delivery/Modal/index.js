import React from 'react';

import PropTypes from 'prop-types';

import Modal from '~/components/Modal';

import { Container } from './styles';

export default function DeliveryModal({ data }) {
  const { address, number, city, state, cep } = data.recipient;

  return (
    <Modal>
      <Container>
        <div>
          <strong>Informações da encomenda</strong>
          <small>
            {address}, {number}
          </small>
          <small>
            {city} - {state}
          </small>
          <small>CEP {cep}</small>
        </div>
        {data.start_dateFormated ? (
          <div>
            <strong>Datas</strong>
            <div>
              <span>Retirada: </span>
              <small>{data.start_dateFormated}</small>
            </div>
            {data.end_dateFormated ? (
              <div>
                <span>Entrega: </span>
                <small>{data.end_dateFormated}</small>
              </div>
            ) : null}
          </div>
        ) : null}
        {data.signature ? (
          <div style={{ paddingBottom: '25px' }}>
            <strong>Assinatura do destinatário</strong>
            <img src={data.signature.url} alt="signature" />
          </div>
        ) : null}
      </Container>
    </Modal>
  );
}

DeliveryModal.propTypes = {
  data: PropTypes.shape({
    start_dateFormated: PropTypes.string,
    end_dateFormated: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      cep: PropTypes.string,
    }),
    status: PropTypes.string,
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
