import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DynamicContextProvider
      settings={{
        appLogoUrl:
          'https://bluecheck.lol/bluecheck.png',
        appName: 'BlueCheck',
        environmentId: 'b959151d-a210-458a-aae5-f98f61fb4222',
        onAuthSuccess: () => {}
      }}
    >
      <App />
    </DynamicContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
