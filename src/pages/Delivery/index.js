import React, { useState, useEffect } from 'react';
import { MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { parseISO, format } from 'date-fns';

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

  function formatDate(data) {
    return data.map(delivery => ({
      ...delivery,
      start_dateFormated: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : null,
      end_dateFormated: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : null,
    }));
  }

  async function handleSearchDelivery(e) {
    setPage(1);
    const response = await api.get('/delivery', {
      params: {
        q: e.target.value,
        page,
      },
    });

    const data = formatDate(response.data);

    setDeliveries(data);
  }

  async function loadDeliveries() {
    const response = await api.get('/delivery', {
      params: {
        page,
      },
    });

    const data = formatDate(response.data);

    setDeliveries(data);
  }

  useEffect(() => {
    loadDeliveries();
  }, [page]);

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
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
          {deliveries.map(delivery => (
            <DeliveryItem
              updateDeliveries={loadDeliveries}
              key={delivery.id}
              data={delivery}
            />
          ))}
        </Grid>
        <section>
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            type="button"
          >
            <MdChevronLeft size={26} />
          </Button>
          <Button
            disabled={deliveries.length < 5}
            type="button"
            onClick={() => setPage(page + 1)}
          >
            <MdChevronRight size={26} />
          </Button>
        </section>
      </Content>
    </Container>
  );
}
