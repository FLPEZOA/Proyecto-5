// src/components/SearchForm.jsx
import React from 'react';

const SearchForm = ({ onSearch, query, setQuery }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar el envío del formulario por defecto
        if (query.trim() === "") return; // Evitar búsqueda vacía
        onSearch(query); // Invocar la búsqueda
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query} // El valor del input es el estado de query
                onChange={(e) => setQuery(e.target.value)} // Actualiza el estado al escribir
                placeholder="Buscar libros..."
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchForm;
