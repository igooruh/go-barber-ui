import React from 'react';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
