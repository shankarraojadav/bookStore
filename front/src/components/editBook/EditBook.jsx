import { useState } from "react";
import { Button } from '@mui/material';
import { AddNewBook, editBookData, getbookById } from "../../service/api";
import { useParams, useNavigate} from "react-router-dom";
import { useEffect } from "react";






const EditBook = () => {
    
    useEffect(() => {
        getbookId();
    }, [])
    const [book, setBook] = useState({});
    
    const { id } = useParams();

    const navigate = useNavigate('/');

    const onValueChange = (e) => {
         setBook({...book, [e.target.name]: e.target.value})
    }

    const getbookId =async () => {
           const response = await getbookById(id);
           setBook(response.data);
    }

    
    const EditBooks = async () => {
        const response = await editBookData(book, id);
        if(response.status == 200) {
            navigate('/');
        }
        
    };

    return (
        <div className="addBook">
            <h1 style={{fontFamily:'cursive'}}>Add Book</h1>
              <input className="input_box" type="text" placeholder='Book Name' name='bookName' onChange={onValueChange} value={book.bookName}/>
              <input  className="input_box" type="text" placeholder='Book Price' name='bookPrice' onChange={onValueChange} value={book.bookPrice} />
              <input  className="input_box" type="text" placeholder='Author Name' name='AuthorName' onChange={onValueChange} value={book.AuthorName} />
              <input  className="input_box" type="text" placeholder='Created by' name='createdBy' onChange={onValueChange} value={book.createdBy} />
              <input  className="input_box" type="text" placeholder='Created at' name='createdAt' onChange={onValueChange} value={book.createdAt} />
              <Button variant='contained' style={{width:"300px"}} onClick={EditBooks}>Add Book</Button>
        </div>
    )
}


export default EditBook;