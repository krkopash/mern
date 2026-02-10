import { Router } from "express";
import { createUser,updateUser,deleteUser} from "../controllers/controller";

const router = Router();

router.post("/", createUser);
router.post("/update", updateUser);


router.get("/delete/:id", deleteUser);
export default router;
