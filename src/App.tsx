import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets';
import { theme } from './theme';
import { getAccessToken } from './utils';
import { Profile, Login } from './pages';

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = getAccessToken();
    setAccessToken(accessToken);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {accessToken ? <Profile /> : <Login />}
    </ThemeProvider>
  )
}

export default App;
