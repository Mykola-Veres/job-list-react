import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import { ToTop } from './components/ScrollToTop/ScrollToTop';
// import { theme } from './common/theme';
// import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="job-list-react">
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* <ToTop /> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
