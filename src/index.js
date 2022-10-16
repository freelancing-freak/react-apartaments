import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CookieConsent} from "react-cookie-consent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <CookieConsent buttonText="Akceptuję cookies"
                       style={{background: "#2B373B"}}
                       buttonStyle={{color: "#000", background: '#01bf71', fontSize: "13px"}}>
            Informacja: Niniejszy serwis wykorzystuje do prawidłowego działania pliki cookies</CookieConsent>
    </React.StrictMode>
);
