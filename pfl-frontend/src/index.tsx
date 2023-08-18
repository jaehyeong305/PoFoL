import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from 'store/pulldown.store';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from "containers/main/main.container";
import { ScrollProvider } from 'context/scroll.context';
import ProfileInfoContainer from "containers/profile/profile-info.container";
import CareerContainer from "containers/career/career.container";
import FrontendContainer from "containers/frontend/frontend.container";
import SelectionFlowContainer from "containers/selection-flow/selection-flow.container";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ScrollProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContainer/>}></Route>
                    <Route path="/profile/info" element={<ProfileInfoContainer/>}></Route>
                    <Route path="/career" element={<CareerContainer/>}></Route>
                    <Route path="/project/frontend" element={<FrontendContainer/>}></Route>
                    <Route path="/project/selection-flow" element={<SelectionFlowContainer/>}></Route>
                </Routes>
            </BrowserRouter>
        </ScrollProvider>
    </Provider>
);

reportWebVitals();
