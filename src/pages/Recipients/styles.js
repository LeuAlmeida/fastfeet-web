import styled from 'styled-components';

import { colors, statusColors } from '~/styles/colors';

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

    grid-template-columns: 0.5fr 1.5fr 2fr 0.5fr;

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

export const ButtonSection = styled.section`
  margin: 30px 0;
`;

export const Button = styled(SimpleButton)`
  width: 100px;
  height: 36px;
  background: ${colors.primary};
  border: 0;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
    background: ${statusColors.DISABLED.background};
    color: ${statusColors.DISABLED.color};
  }
`;
