import React from 'react';
import { MdAdd } from 'react-icons/md';

import IconButton from '~/components/utils/Button/IconButton';
import HeaderList from '~/components/HeaderList';
import SearchInput from '~/components/Form/SearchInput';

import history from '~/services/history';

import { Container, Content, Grid } from './styles';

export default function Delivery() {
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
            action={() => history.push('/deliveries/form')}
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
