import { useState } from "react";
import { Button } from '@mui/material';
import './addbook.css';
import { AddNewBook } from "../../service/api";







const AddBook = () => {
    const [book, setBook] = useState({});

    const onValueChange = (e) => {
         setBook({...book, [e.target.name]: e.target.value})
    }

    const addBooks = async () => {
        const response = await AddNewBook(book);
        console.log(response)
        
    }
    return (
        <div className="addBook">
            <h1 style={{fontFamily:'cursive'}}>Add Book</h1>
              <input className="input_box" type="text" placeholder='Book Name' name='bookName' onChange={onValueChange} />
              <input  className="input_box" type="text" placeholder='Book Price' name='bookPrice' onChange={onValueChange} />
              <input  className="input_box" type="text" placeholder='Author Name' name='AuthorName' onChange={onValueChange} />
              <input  className="input_box" type="text" placeholder='Created by' name='createdBy' onChange={onValueChange} />
              <input  className="input_box" type="text" placeholder='Created at' name='createdAt' onChange={onValueChange} />
              <Button variant='contained' style={{width:"300px"}} onClick={addBooks}>Add Book</Button>
        </div>
    )
}


export default AddBook;