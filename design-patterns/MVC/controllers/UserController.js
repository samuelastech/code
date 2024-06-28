class UserController {
  User;
  UserView;

  constructor ({ models, views }) {
    for (const model of models) {
      this[model.name] = model;
    }

    for (const view of views) {
      this[view.name] = view;
    }
  }

  add (user) {
    const createdUser = new this.User({
      name: user.name,
    });
    new this.UserView(createdUser.show());
  }
}

export { UserController };
