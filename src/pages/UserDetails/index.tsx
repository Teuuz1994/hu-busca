import { FiArrowLeft } from 'react-icons/fi';

import UserInfo from '../../components/UserInfo';

import { ButtonGoback } from './style';

const UserDetails = () => {
  return (
    <>
      <ButtonGoback to="/">
        <FiArrowLeft
          size={32}
        />
      </ButtonGoback>
      <UserInfo />
    </>
  )
};

export default UserDetails;
