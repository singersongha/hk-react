import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Calc from './components/calc';
import Calculator from './components/Calculator';
import CustomForm from './components/CustomForm';
import Test from './components/test/Test';
import './global.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Template from './components/template';

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Template />,
            children: [
                {
                    path:"/test",
                    element: <Test />
                },
                {
                    path:"/",
                    element: <CustomForm />
                },
            ]
        },
        
    ]
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
