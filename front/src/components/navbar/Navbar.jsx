import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from '@mui/material';
import './navbar.css';
import { Routes, Route } from "react-router-dom";
import Book from '../books/Book';
import AddBook from "../addbook/AddBook";
import EditBook from "../editBook/EditBook";




const Navbar = () => {
    return (
        <div>
           <AppBar position="static" >
            <Toolbar>
             <NavLink to='/' className="navlink">Books</NavLink>
             <NavLink to='/addbook' className="navlink">Add Book</NavLink>
            </Toolbar>
           </AppBar>
           <Routes>
                <Route path='/' element={ <Book /> } />
                <Route path='/addbook' element={ <AddBook /> } />
               <Route path="/edit/:id" element={ <EditBook /> } />
            </Routes>
        </div>
    )
}


export default Navbar;