import React, { useState } from 'react';

import HeaderList from '~/components/HeaderList';

import { Container, Content, Grid, Button } from './styles';

export default function Problems() {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Content>
        <HeaderList title="Problemas na entrega" />
        <Grid>
          <section>
            <strong>Encomenda</strong>
            <strong>Problema</strong>
            <strong>Ações</strong>
          </section>
        </Grid>
        <section>
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            type="button"
          >
            voltar
          </Button>
          {/* <Button
						disabled={problems.length < 5}
						type="button"
						onClick={() => setPage(page + 1)}
					>
						proximo
					</Button> */}
        </section>
      </Content>
    </Container>
  );
}
