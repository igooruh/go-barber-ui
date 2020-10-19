import React from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
