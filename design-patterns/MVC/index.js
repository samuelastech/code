import { UserController } from "./controllers/UserController.js";
import { UserView } from "./views/UserView.js";
import { User } from "./models/User.js";

const controller = new UserController({
  models: [User],
  views: [UserView],
});

controller.add({ name: 'Olívia' });
