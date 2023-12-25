import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import dotenv from 'dotenv';
import BooksRoute from './routes/BooksRoute.js';

dotenv.config();
const app = express();
db();

app.use('/images', express.static('images'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(BooksRoute);
// Menentukan port server
const PORT = process.env.PORT;

// Memulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
