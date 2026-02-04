import { Router } from "express";
import { getJokes, createJoke } from "../controllers/controllers";
// import { addJoke } from "../services/services";
const router=Router();
router.get('/api/jokes', getJokes);
router.post('/api/jokes', createJoke);

export default router;
