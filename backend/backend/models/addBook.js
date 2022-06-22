import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bookName: String,
    bookPrice: String,
    AuthorName: String,
    createdBy: String,
    createdAt: String
});

const AddBook = mongoose.model('AddBook', bookSchema);


export default AddBook;