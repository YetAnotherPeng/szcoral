import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App';
// import Box from './Box';
// import Gallery1 from './Gallery';
// import moment from 'moment';
import 'moment/locale/zh-cn';
import createBrowserHistory from './libs/history';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router history={createBrowserHistory}>
        <ConfigProvider locale="{zhCN}">
            <App/>
        </ConfigProvider>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
