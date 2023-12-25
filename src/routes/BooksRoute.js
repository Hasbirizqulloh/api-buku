import express from 'express';
import { getBooks, getBookById, createBook, deleteBook, updateBook } from '../controllers/BooksController.js';
import { upload } from '../middleware/mutlerMiddleware.js';
const router = express.Router();

router.use(upload.single('coverImage'));
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
