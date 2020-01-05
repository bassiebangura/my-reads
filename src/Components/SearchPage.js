import React , {useState}  from 'react'; 
import {useHistory} from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookCard from "./BookCard"


function SearchPage ({books, handleSelectChange}) {
    let currentBooksInLibrary = [...books.currentlyReading, ...books.wantToRead, ...books.read]
    
    const [SearchResults, updateSearchResults] = useState([])
    let history = useHistory();

    let handleClick = () => {
        history.push("/")
    }
    let handleOnChange = (e) => {
        
        BooksAPI.search(e.target.value).then(res => {

         if (res) {
                  if (res.error) {
             updateSearchResults([])
         } else {
                       let arrayOfBooksFromSearch =  res.filter(book => book.imageLinks).map(  
                book => ({
                id: book.id,
                shelf: "none",
                title: book.title,
                authors: book.authors,
                imageLink: book.imageLinks && book.imageLinks.thumbnail
            })

         )
     
        let booksToDisplay = arrayOfBooksFromSearch.reduce((result, bookFromSearch) => {
            //function compares two arrays and return a single array,
            //that reflects the current shelf of book if book is currently 
            //in library
        const bookToDisplay = currentBooksInLibrary.find(bookInLib => bookInLib.id === bookFromSearch.id);
        if(bookToDisplay) {
            result.push(bookToDisplay)
        } else {
            result.push(bookFromSearch);
        }
        return result;
        
        }, []);
    
          updateSearchResults(booksToDisplay);
         }
         } 
         if (!res) {
             updateSearchResults([]);
         }
        }
        ).catch  ( e =>
            (console.log(e))
           
        )
            
        
      
    }
    
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
                        SearchResults  &&    SearchResults.map(book => <BookCard key={book.id} handleSelectChange={handleSelectChange} book={book}/>)
                    } 
                   
                </ol>
            </div>
        </div>
    )
}


export default SearchPage;

