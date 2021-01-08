import styled from 'styled-components';

import Button from '../Button';
import { UserBoxInfo } from '../../pages/Home/style';

export const ButtonModal = styled(Button)`
  width: 245px;
  height: 57px;
  position: absolute;
  top: 165px;
  left: 200px;
`;

export const ModalContainer = styled(UserBoxInfo)`
  max-width: 100%;
`;
