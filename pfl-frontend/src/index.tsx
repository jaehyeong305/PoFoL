import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from 'store/pulldown.store';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from "components/main/main.component";
import { ScrollProvider } from 'context/scroll.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ScrollProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </ScrollProvider>
    </Provider>
);

reportWebVitals();
