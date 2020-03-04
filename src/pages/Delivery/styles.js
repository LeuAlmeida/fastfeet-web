import styled from 'styled-components';

import { statusColors, colors } from '~/styles/colors';

import { SimpleButton } from '~/components/utils/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 120px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;

export const Grid = styled.div`
  height: 400px;
  > section {
    display: grid;

    padding-left: 25px;
    padding-right: 13px;

    grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 1.5fr 1fr 1fr;

    strong:last-child {
      text-align: right;
    }

    strong {
      font-size: 16px;
      color: #444;
    }

    margin-bottom: 15px;
  }

  > div + div {
    margin-top: 20px;
  }
`;

export const Button = styled(SimpleButton)`
  width: 100px;
  height: 36px;
  background: ${colors.primary};
  border: 0;
  color: #fff;

  &:disabled {
    cursor: not-allowed;
    background: ${statusColors.CANCELED.background};
    color: ${statusColors.CANCELED.color};
  }
`;
