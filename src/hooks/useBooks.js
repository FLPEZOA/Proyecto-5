// src/hooks/useBooks.js
import { useState } from 'react';

const useBooks = () => {
    const [books, setBooks] = useState([]); // Para almacenar libros
    const [loading, setLoading] = useState(false); // Para saber si se está cargando
    const [error, setError] = useState(null); // Para manejar errores

    const searchBooks = async (query) => {
        setLoading(true); // Iniciar estado de carga
        setError(null); // Resetear error antes de buscar
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`);
            if (!response.ok) {
                throw new Error('Error en la búsqueda: ' + response.statusText); // Manejar errores de respuesta
            }
            const data = await response.json(); // Procesar la respuesta
            setBooks(data.items || []); // Almacenar libros encontrados
        } catch (err) {
            console.error('Error fetching books:', err);
            setError(err.message); // Manejar errores
        } finally {
            setLoading(false); // Finalizar estado de carga
        }
    };

    return { books, loading, error, searchBooks };
};

export default useBooks;
