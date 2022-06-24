import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { Store } from './Store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <React.StrictMode>
//    <App />
//   </React.StrictMode>

// );


// reportWebVitals();