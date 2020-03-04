import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import More from '~/components/utils/More';
import api from '~/services/api';
import history from '~/services/history';
import { statusColors, colors } from '~/styles/colors';

import DeliveryModal from '../Modal';
import Status from './DeliveryStatus';
import { Container, List, MoreConainer } from './styles';

import translateStatus from '~/utils/translateStatus';

export default function DeliveryItem({ data, updateDeliveries }) {
  async function handleDelete() {
    const confirm = window.confirm('Você realmente deseja excluir?');

    if (!confirm) {
      toast.error(`A encomenda ${data.product} não foi deletada.`);
      return;
    }

    try {
      await api.delete(`/delivery/${data.id}`);
      updateDeliveries();
      toast.success('Encomenda deletada com sucesso.');
    } catch (err) {
      toast.error('Essa encomenda não pôde ser deletada.');
    }
  }

  return (
    <Container>
      <List>#{data.id}</List>
      <List>{data.recipient.name}</List>
      <List>{data.product}</List>
      <List>{data.recipient.city}</List>
      <List>{data.recipient.state}</List>
      <Status
        text={translateStatus(data.status)}
        color={statusColors[data.status].color}
        background={statusColors[data.status].background}
      />
      <More>
        <MoreConainer>
          <div>
            <DeliveryModal data={data} />
          </div>
          <div>
            <button
              onClick={() => history.push(`/deliveries/form/${data.id}`)}
              type="button"
            >
              <MdEdit color={colors.info} size={15} />
              <span>Editar</span>
            </button>
          </div>
          <div>
            <button onClick={handleDelete} type="button">
              <MdDeleteForever color={colors.danger} size={15} />
              <span>Excluir</span>
            </button>
          </div>
        </MoreConainer>
      </More>
    </Container>
  );
}

DeliveryItem.propTypes = {
  updateDeliveries: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
