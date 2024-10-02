// src/pages/HomePage.jsx
import React, { useCallback, useMemo, useState } from 'react';
import BookList from '../components/BookList.jsx';
import SearchForm from '../components/SearchForm.jsx';
import useBooks from '../hooks/useBooks.js';

const HomePage = () => {
    const { books, loading, error, searchBooks } = useBooks();
    const [query, setQuery] = useState(''); // Para almacenar el query de búsqueda

    // Manejar búsqueda
    const handleSearch = useCallback((query) => {
        searchBooks(query); // Invocar la función de búsqueda desde el hook
    }, [searchBooks]);

    const bookCount = useMemo(() => books.length, [books]);

    return (
        <div>
            <h1>Buscador de Libros</h1>
            {loading && <p>Cargando libros...</p>}
            {error && <p>Error: {error}</p>}
            <p>Libros encontrados: {bookCount}</p>
            <SearchForm
                onSearch={handleSearch}
                query={query}
                setQuery={setQuery} // Almacena el valor del input
            />
            <BookList books={books} /> {/* Mostrar lista de libros */}
        </div>
    );
};

export default HomePage;
