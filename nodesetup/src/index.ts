import  express, {Request, Response}  from "express";
import http from 'http';

const port=process.env.PORT||3000;
const app=express();
//5000
app.get('/', (req: Request, res: Response) => {
  res.json(
    [{message: 'Node.js + TypeScript server is runninggggg!',},
    {PORT: '5000'},] );
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

//3000
const server = http.createServer((req,res)=>{
    // res.statusCode=300;
    // res.setHeader('Content', 'text/plain');
    res.end(`server running on port ${port}`);
});

server.listen(port,()=>{
    console.log(`server running on port ${port}`);
});



 


// import express,{  Request, Response } from "express";
// import taskRoutes from './routes/tasks';

// const app=express();
// const port=process.env.PORT||3000;
// app.use(express.json());
// app.use('/tasks', taskRoutes); 

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript Express!');
// });
// app.get('/data', (req:Request, res:Response)=>{
//     res.send(taskRoutes);
// })

// app.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });
