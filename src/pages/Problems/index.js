import React, { useState, useEffect } from 'react';

import HeaderList from '~/components/HeaderList';
import ProblemItem from './ProblemItem';

import api from '~/services/api';

import { Container, Content, Grid, Button } from './styles';

export default function Problems() {
  const [page, setPage] = useState(1);
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get('/delivery/problems', {
      params: {
        page,
      },
    });

    setProblems(response.data);
  }
  useEffect(() => {
    loadProblems();
  }, [page]);

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
          {problems.map(problem => (
            <ProblemItem
              updateProblems={loadProblems}
              key={problem.id}
              data={problem}
            />
          ))}
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
