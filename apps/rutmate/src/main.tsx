import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { createContext } from 'react';
const UserContext = createContext({});
const theme = {name:'', lastName:'', role:'', questions: {pair:'',maxMates:'',maxMoney:'',possPlace:'',cleanfulness:'',pets:'', alco:'',smoke:''},}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <UserContext.Provider value={theme}>
      <App />
    </UserContext.Provider>
  </StrictMode>
);
