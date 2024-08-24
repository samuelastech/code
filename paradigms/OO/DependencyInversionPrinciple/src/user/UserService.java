package user;

import common.Repository;

public class UserService {
    private final Repository<UserModel> userRepository;

    /*
    * When instantiating this class, I can pass any object that matches
    * the "Repository" abstraction
    *  */
    public UserService(Repository<UserModel> userRepository) {
        this.userRepository = userRepository;
    }

    public void add(UserModel user) {
        this.userRepository.add(user);
    }

    public void remove(UserModel user) {
        this.userRepository.remove(user);
    }
 }
