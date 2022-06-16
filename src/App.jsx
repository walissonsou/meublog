import './App.css';
import AplicationRoutes from './routes/index';
import  {Container}  from './styles';
// import { GlobalStyles } from './styles/themes/globalStyles'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes/theme'
import {useState} from 'react';


function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return ( 
   <>
     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       {/* <GlobalStyles /> */}
       <Container>
        <AplicationRoutes />
       </Container>
      </ThemeProvider>
     </>
  
  )  
}

export default App;
