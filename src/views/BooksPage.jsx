import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectBooks } from '../store/booksSlice.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const pageTitle = "📖 Book List App";

  const bookStatus = useSelector(selectBooks).status;

  useEffect(() => {
    if (bookStatus == 'idle') {
      dispatch(fetchBooks())
    }
    dispatch(fetchBooks());
  }, []);



  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">

          { books.length ? 
            <div className="books-list">

              {books.map(book =>

                <Book key={book.id} book={book} />

              )}

            </div> : bookStatus == 'loading' ?
            <div>Loading...</div> : 
            <div>Your book list is empty. <Link to="/add-book">CLick here</Link> to add a new book.</div>  

          }

        </div>
      </div>
    </>
  )
}

export default BooksPage
