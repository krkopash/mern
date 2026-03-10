import { Router } from "express";
import * as controller from "../controllers/user";
//import { userValidationRules, validate } from "../middleware/validate.middleware";

const router = Router();

router.get("/users", controller.listUsers);
router.get("/users/new", controller.showAddForm);

// router.post("/users", userValidationRules, validate, controller.addUser);
// router.post("/users/update/:id", userValidationRules, validate, controller.updateUser);

router.post('/users', controller.addUser);
router.post('/users/update/:id', controller.updateUser)


router.get("/users/edit/:id", controller.showEditForm);

router.get("/users/delete/:id", controller.deleteUser);
router.get("/api/users", controller.listUsersApi);

export default router;
