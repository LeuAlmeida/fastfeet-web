import styled, { keyframes, css } from 'styled-components';

import { colors, statusColors } from '~/styles/colors';
import { SimpleButton } from '~/components/utils/Button';

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

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
  > section {
    ${props =>
      props.null
        ? css`
            display: flex;
            justify-content: space-around;
            grid-template-columns: 1fr;
          `
        : css`
            display: grid;
            grid-template-columns: 0.5fr 1.2fr 2fr 1.5fr 1fr 0.5fr 1fr;
          `}

    padding-left: 25px;
    padding-right: 13px;

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

export const ButtonSection = styled.section`
  margin: 30px 0;
`;

export const EmptyField = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    margin-top: 40px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
    color: ${colors.primary};
  }
`;

export const LoadingField = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    margin-top: 40px;
    animation: ${rotate} 2s linear infinite;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
    color: ${colors.primary};
  }
`;
