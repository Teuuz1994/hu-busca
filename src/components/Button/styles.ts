import styled from 'styled-components';

import { ButtonProps } from '.'

export const CustonButton = styled.button<ButtonProps>`
  padding: 1rem;
  outline: none;
  border: none;
  width: 100%;
  height: 4rem;
  color: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#fff'

      case 'secundary':
        return '#fff'

      case 'success':
        return '#fff'

      case 'danger':
        return '#fff'

      case 'alert':
        return '#000'

      case 'info':
        return '#000'

      case 'dark':
        return '#fff'

      default:
        return '#fff'
    }
  }};
  background: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#0d6efd'

      case 'secundary':
        return '#6c757d'

      case 'success':
        return '#198754'

      case 'danger':
        return '#dc3545'

      case 'alert':
        return '#ffc107'

      case 'info':
        return '#0dcaf0'

      case 'dark':
        return '#161b22'

      default:
        return '#0d6efd'
    }
  }};
  font-size: ${props => {
    switch (props.textContentSize) {
      case 'small':
        return '16px'

      case 'medium':
        return '24px'

      case 'large':
        return '32px'

      default:
        return '16px'
    }
  }};
  font-weight: ${props => props.textBolder ? '700' : '400'};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  transition: opacity .2s;

  &:hover {
    opacity: 80%
  }
`;
