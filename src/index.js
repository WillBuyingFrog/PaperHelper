// 一个用create-react-app创建的react项目的index.js文件，它的作用是将App组件渲染到页面上。
// 之前误删了本文件，现在重写一遍index。js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)