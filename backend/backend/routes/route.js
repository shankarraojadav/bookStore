import express from 'express';
import { AddNewBook, deleteBook, editBookById, getBookbyAuthor, getBookById, getBooksData } from '../control/bookControl.js';
import { AuthenticateLog, SignupNewUser } from '../control/userControl.js';

const router = express.Router();

router.post('/signup', SignupNewUser);
router.post('/login', AuthenticateLog);
router.post('/addBook', AddNewBook);
router.get('/getbooks', getBooksData);
router.get('/:id', getBookById);
router.put('/:id', editBookById);
router.delete('/:id', deleteBook);
router.post('/filter', getBookbyAuthor)


export default router;