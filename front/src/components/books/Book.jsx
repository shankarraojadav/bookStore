import { useState } from "react";
import { useEffect } from "react";
import { deleteBook, getBookByAuthor, getBooks } from "../../service/api";
import { Edit, DeleteSweep } from '@mui/icons-material'
import { Link } from 'react-router-dom';

import './book.css';
import {Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'


const Book = () => {

    const [bookList, setBookList] = useState();
    const [author, setAuthor] = useState({});
   
    
    useEffect(() => {
        bookdata();
    }, []);

    const bookdata =async () => {
        let data = await getBooks();
        setBookList(data.data)
    };

    const deleteBookById =async (id) => {
          await deleteBook(id);
          bookdata();
    }
// console.log(bookList)
  
    const filterBook =async () => {
        const response = await getBookByAuthor(author);
        setBookList('')
       await setBookList(response.data)
      
    }
    return (
       <div className="book">
        <div>
            <input type="text" placeholder="Search by Author" onChange={(e) => {setAuthor({AuthorName: e.target.value})}} />
            <Button onClick={filterBook}>Filter</Button>
        </div>
        {
            bookList ? 
           <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Sl No</TableCell>
                    <TableCell>Book Name</TableCell>
                    <TableCell>Author Name</TableCell>
                    <TableCell>Book Price</TableCell>
                    <TableCell>Created By</TableCell>
                    <TableCell>Created At</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bookList.map((item) => (
                    
                    <TableRow key={item.id}>
                        <TableCell>*</TableCell>
                         <TableCell>{item.bookName}</TableCell>
                         <TableCell>{item.AuthorName}</TableCell>
                         <TableCell>{item.bookPrice}</TableCell>
                         <TableCell>{item.createdAt}</TableCell>
                         <TableCell>{item.createdBy}</TableCell>
                         <TableCell>
                            <Button component={Link} to={`/edit/${item._id}`}><Edit /></Button>
                            <Button onClick={() => deleteBookById(item._id)}><DeleteSweep /></Button>
                         </TableCell>
                    </TableRow>
                ))}
            </TableBody>
           </Table> : <p>loading...</p>
        }
       </div>
    )
}


export default Book;