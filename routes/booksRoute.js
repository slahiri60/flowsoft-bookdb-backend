import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;