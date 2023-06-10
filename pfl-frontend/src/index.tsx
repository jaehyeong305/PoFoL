import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './ui-component/header/header.component';
import {HEADER_LOGO_ROOT, HEADER_TABS} from "./constants";
import store from './store/store';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderComponent
        rogoImageUrl={HEADER_LOGO_ROOT}
        headerTabs={HEADER_TABS}
        ></HeaderComponent>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
