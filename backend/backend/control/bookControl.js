import AddBook from "../models/addBook.js"


export const AddNewBook =async (req, res) => {
      try {
        const Book = new AddBook(req.body);
        await Book.save();
        res.status(200).json({msg:'book added successfully'})
      } catch (error) {
        res.status(500).json({msg: error.message})
      }
}

export const getBooksData =async (req, res) => {
  try {
    const books =await AddBook.find({});
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}

export const getBookById =async (req, res) => {
       try {
        const book =await AddBook.findById(req.params.id);
        res.status(200).json(book);
       } catch (error) {
        res.status(400).json({msg: error.message})
       }
};

export const editBookById = async (req, res) => {
  try {
    const book = new AddBook(req.body);
    await AddBook.updateOne({_id: req.params.id}, book );
    res.status(200).json("book updated successfully")
  } catch (error) {
    res.status(400).json('error while editing book', error)
  }
};


export const deleteBook =async (req, res) =>{
  try {
    await AddBook.deleteOne({_id: req.params.id})
    res.status(200).json("Book deleted successfully")
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
};

export const getBookbyAuthor =async (req, res) => {
  try {
    // console.log(req.body.AuthorName)
    const findAuthor = await AddBook.findOne({AuthorName: req.body.AuthorName});
    res.status(200).json(findAuthor);
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}