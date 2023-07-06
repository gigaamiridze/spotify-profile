import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets';
import { theme } from './theme';
import { Login } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  )
}

export default App;