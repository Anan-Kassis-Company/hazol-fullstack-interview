import express from 'express';
import cors from 'cors';
import { products } from './data/products';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/products', (_req, res) => res.json(products));

// TODO TASK 2: Implement POST /api/products.
// Accept JSON { name: string, price: number }.
// Validate: nonempty trimmed name and finite positive price.
// Return 400 for invalid input, otherwise create a unique numeric id,
// add to the in-memory products array, and return the created product with HTTP 201.
app.post('/api/products', (_req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => console.log(`API running at http://localhost:${port}`));
