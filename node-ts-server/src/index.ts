import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

app.get('/api/users', (req: Request, res: Response) => {
  res.json({
    message: 'Node.js + TypeScript server',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});