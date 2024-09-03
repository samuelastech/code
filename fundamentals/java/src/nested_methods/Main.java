package nested_methods;

public class Main {
    public static void main(String[] args) {
        OuterClass outerClass = new OuterClass();

        outerClass.regularMethod();
        outerClass.callNested();
    }
}
