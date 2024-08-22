import polymorphism.Animal;
import polymorphism.Cat;
import polymorphism.Dog;
import polymorphism.Forest;
import variables.Variables;

public class Main {
    public static void main(String[] args) {
        Cat cat = new Cat();
        Dog dog = new Dog();
        Animal anyAnimal = cat;
        Forest.call(anyAnimal);

        Variables.run();
    }
}