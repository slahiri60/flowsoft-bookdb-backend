import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  //console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// db
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('DB ERROR => ', err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
