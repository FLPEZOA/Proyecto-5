// src/components/BookList.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const BookList = ({ books }) => {
    return (
        <div className="row"> {/* Usando rejilla de Bootstrap */}
            {books.length > 0 ? (
                books.map((book) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 mb-4"> {/* Establece el ancho de las columnas */}
                        <Card style={{ background: '#333', color: 'white' }}> {/* Tarjeta de Bootstrap */}
                            <Card.Body>
                                <a
                                    href={book.volumeInfo.infoLink} // Enlace al detalle del libro
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'white', textDecoration: 'none' }} // Estilo del enlace
                                >
                                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                                    <Card.Text>
                                        {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}
                                    </Card.Text>
                                    {book.volumeInfo.imageLinks?.thumbnail && (
                                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    )}
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ) : (
                <p>No se encontraron libros.</p>
            )}
        </div>
    );
};

export default BookList;
