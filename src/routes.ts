import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListAllUsersController } from "./controllers/ListAllUsersController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  new CreateTagsController().handle
);
router.post("/login", new AuthenticateUserController().handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  new CreateComplimentsController().handle
);
router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  new ListUserSenderComplimentsController().handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  new ListUserReceiverComplimentsController().handle
);
router.get("/users/list", new ListAllUsersController().handle);

export { router };
