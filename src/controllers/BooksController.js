import Book from '../models/BooksModel.js';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  const { judul, author, genre, description, year, publisher, pageCount, rating, status } = req.body;
  const imagePath = 'https://' + req.get('host') + '/' + req.file.path.replace('\\', '/');
  const newBook = new Book({
    judul,
    author,
    genre,
    description,
    year,
    publisher,
    pageCount,
    rating,
    status,
    coverImage: imagePath,
  });
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
