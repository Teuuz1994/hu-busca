import Routes from './routes';

import GlobalStyles from './styles/global';
import { UserDetailProvider } from './contexts/UserDetailsContext';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <UserDetailProvider>
        <Routes />
      </UserDetailProvider>
    </>
  );
};

export default App;
