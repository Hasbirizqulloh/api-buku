import express from 'express';
import { getBooks, getBookById, createBook, deleteBook, updateBook } from '../controllers/BooksController.js';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
