import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Ígor' }}>
      <SignIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
