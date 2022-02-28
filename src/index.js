import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {PublicCtx} from "./context/context";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <PublicCtx>
                <App/>
            </PublicCtx>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

