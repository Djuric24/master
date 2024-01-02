import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { books } from './Books';
import Book from './Book';


function BookList() {
  return (
        <section className='booklist'>
          {books.map((book, index) => {
            return <Book key={book.id} {...book} ></Book>
          })};
        </section>
  );
}

          // imp exp gotov, ide host!





const container = document.getElementById('root');

const root = createRoot(container);

root.render(<BookList/>);
