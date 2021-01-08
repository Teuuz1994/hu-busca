import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonGoback = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;

  background: var(--secundary-color);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 80%;
  }

  svg {
    color: var(--white-color);
  }

  @media(max-width: 768px) {
    background: var(--white-color);
    top: 10px;
    left: 10px;
    z-index: 1;

    width: 50px;
    height: 50px;

    svg {
      color: var(--dark-color);
    }
  }
`;
