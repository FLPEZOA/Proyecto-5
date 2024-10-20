// src/components/BookList.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

// URL del marcador de posición
const placeholderImage = 'https://via.placeholder.com/200x300.png?text=Sin+Imagen';

const BookList = ({ books }) => {
    return (
        <div className="row">
            {books.length > 0 ? (
                books.map((book) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card style={{ background: '#333', color: 'white', height: '100%' }}>
                            <Card.Body>
                                <a
                                    href={book.volumeInfo.infoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'white', textDecoration: 'none' }}
                                >
                                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                                    <Card.Text>
                                        {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}
                                    </Card.Text>
                                    <Card.Img
                                        variant="top"
                                        src={book.volumeInfo.imageLinks?.thumbnail || placeholderImage} // Usar imagen de marcador si no hay thumbnail
                                        alt={book.volumeInfo.title}
                                        style={{ width: '100%', height: 'auto', maxHeight: '250px' }}
                                    />
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
