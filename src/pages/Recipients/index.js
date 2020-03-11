import React from 'react';
import HeaderList from '~/components/HeaderList';

import { Container, Content, Grid, Button } from './styles';

export default function Recipients() {
  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando destinatários" />
        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Nome</strong>
            <strong>Endereço</strong>
            <strong>Ações</strong>
          </section>
        </Grid>
        {/* <section>
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            type="button"
          >
            voltar
          </Button>
          <Button
            disabled={recipients.length < 5}
            type="button"
            onClick={() => setPage(page + 1)}
          >
            proximo
          </Button>
        </section> */}
      </Content>
    </Container>
  );
}
