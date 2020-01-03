import React   from 'react';
import ListBooks from "./ListBooks";


function MainPage ({books, handleSelectChange}) {

    return (
        <div className="app">
                
              
              {
                books && <ListBooks handleSelectChange={handleSelectChange} books={books}/>
              } 
         
        </div>
    )
}

export default MainPage;