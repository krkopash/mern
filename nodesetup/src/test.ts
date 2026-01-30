import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

app.get('/user', (req: Request, res: Response) => {
  res.json(
  {
    message: 'Node.js + TypeScript server is running',
    name:'node',
  },

);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});