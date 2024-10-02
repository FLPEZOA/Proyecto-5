// src/pages/BookDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetail = ({ books }) => {
    const { bookId } = useParams(); // Obtener ID del libro de la URL
    const book = books.find(b => b.id === bookId); // Buscar el libro basado en el ID

    if (!book) return <p>Libro no encontrado</p>; // Claro manejo de error para libro no encontrado

    return (
        <div>
            <h2>{book.volumeInfo.title}</h2>
            <h3>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</h3>
            <p>{book.volumeInfo.description || "No hay descripción disponible."}</p>
            {book.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            ) : null}
            <Link to="/">Volver a la búsqueda</Link>
        </div>
    );
};

export default BookDetail;
