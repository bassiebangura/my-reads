import React , {useState}  from 'react'; 
import {useHistory} from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookCard from "./BookCard"

function SearchPage () {
    const [SearchResults, updateSearchResults] = useState([])
    let history = useHistory();

    let handleClick = () => {
        history.push("/")
    }
    let handleOnChange = (e) => {
        BooksAPI.search(e.target.value).then(res => {
            console.log(res)
         if (res) {
              let arrayOfBooks =  res.map( book => ({
                bookId: book.id,
                shelf: "none",
                title: book.title,
                authors: book.authors,
                imageLink: book.imageLinks && book.imageLinks.thumbnail
            })

         )
          updateSearchResults(arrayOfBooks)
         }
       
        }
        
        ).catch  ( e =>
            (console.log(e))
        )
            
        
      
    }
    console.log(SearchResults)
    return (
        <div className="search-books">
            <div className="search-books-bar">
               
                  <button
                    className="close-search"
                    onClick={handleClick}
                >
                   
                </button>
                <div className="search-books-input-wrapper">
                    {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
    */}
                    <input type="text" placeholder="Search by title or author" onChange={handleOnChange}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        SearchResults  &&    SearchResults.map(book => <BookCard book={book}/>)
                    } 
                   
                </ol>
            </div>
        </div>
    )
}


export default SearchPage;

