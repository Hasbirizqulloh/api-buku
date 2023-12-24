import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: String,
  description: String,
  year: Number,
  publisher: String,
  pageCount: Number,
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  status: {
    type: String,
    enum: ['Read', 'Reading', 'Unread'],
  },
  coverImage: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
