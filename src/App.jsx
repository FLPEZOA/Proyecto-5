// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import BookDetail from './pages/BookDetail.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = () => {
  const [books, setBooks] = React.useState([]);

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage setBooks={setBooks} />} />
          <Route path="/book/:bookId" element={<BookDetail books={books} />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

