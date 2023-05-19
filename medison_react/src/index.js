import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Country from "./pages/Country";
import EditCountry from "./pages/EditCountry";

const countriesTableRoot = document.getElementById('countries-table');
const editCountryRoot = document.getElementById('edit-country');

if (countriesTableRoot) {
    ReactDOM.createRoot(countriesTableRoot).render(
        <React.StrictMode>
            <Country />
        </React.StrictMode>
    );
}

if (editCountryRoot) {
    ReactDOM.createRoot(editCountryRoot).render(
        <React.StrictMode>
            <EditCountry />
        </React.StrictMode>
    );
}






