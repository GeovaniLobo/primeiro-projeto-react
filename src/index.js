import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/users';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home /> 
        <GlobalStyle/>
    </React.StrictMode>
);

