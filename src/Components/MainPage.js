import React   from 'react';
import ListBooks from "./ListBooks";


function MainPage ({books}) {
    return (
        <div className="app">
                
              
              {
                books && <ListBooks books={books}/>
              } 
         
        </div>
    )
}

export default MainPage;