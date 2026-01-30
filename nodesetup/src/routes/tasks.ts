import { Request, Response,Router } from "express";
import { Task } from "../models/task";

const router=Router();
let tasks:Task[]=[];
export default router;
//create
router.post('/', (req: Request, res:Response)=>{
    const task: Task={
        title: req.body.title,
        id: tasks.length+1,
        description: req.body.description,
        completed: false,
    };
    tasks.push(task);
    res.status(201).json(task);
});
//read
router.get('/read', (req: Request, res:Response)=>{
    res.json(tasks);
});

//read single
// router.get('/:id', (req: Request, res: Response)=>{
//     const task = tasks.find ((t)=>t.id===parseInt(req.params.id));
// })

// router.put('/:id', (req: Request, res: Response) => {
//   const task = tasks.find((t) => t.id === parseInt(req.params.id));

//   if (!task) {
//     res.status(404).send('Task not found');
//   } else {
//     task.title = req.body.title || task.title;
//     task.description = req.body.description || task.description;
//     task.completed = req.body.completed || task.completed;

//     res.json(task);
//   }
// });
