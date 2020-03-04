import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import IconButton from '~/components/utils/Button/IconButton';
import HeaderList from '~/components/HeaderList';
import SearchInput from '~/components/Form/SearchInput';

import DeliveryItem from './DeliveryItem';
import { Container, Content, Grid, Button } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  function handleSearchDelivery(e) {}

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando encomendas">
          <SearchInput
            onChange={handleSearchDelivery}
            type="text"
            placeholder="Buscar por encomendas"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/delivery/create')}
            type="button"
          />
        </HeaderList>

        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Produto</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
        </Grid>
      </Content>
    </Container>
  );
}
