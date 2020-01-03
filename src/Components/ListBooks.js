import React from "react";
import {useHistory} from "react-router-dom"
import BookCard from "./BookCard"

function ListBooks ({books, handleSelectChange}) {
    let history = useHistory();
    let handleClick = ()  => {
    history.push("/search");
  }
    return (
        <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                           books && books.currentlyReading.map(book => <BookCard handleSelectChange={handleSelectChange} book={book}/>)
                                        }
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                         {
                                           books && books.wantToRead.map(book => <BookCard handleSelectChange={handleSelectChange} book={book}/>)
                                        }
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                         {
                                           books && books.read.map(book => <BookCard handleSelectChange={handleSelectChange} book={book}/>)
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <button onClick={handleClick}>
                            Add a book
                        </button>
                    </div>
                </div>
				)}

export default ListBooks;