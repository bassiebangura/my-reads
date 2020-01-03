import React from "react";


function BookCard ({book}) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${book.imageLink})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf}>
                            <option value="move" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">
                    {book.title}
                </div>
                <div className="book-authors">
                {
                   book.authors.map((author, i, arr) => (arr.length - 1 === i ? author : `${author}, `))
                }
                </div>
            </div>
        </li>
    )
}

export default BookCard;