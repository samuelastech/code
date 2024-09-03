package nested_class;

public class Main {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        OuterClass.InnerNestedClass innerNested = outer.new InnerNestedClass();
        OuterClass.StaticNestedClass staticNested = new OuterClass.StaticNestedClass();

        innerNested.display();
        staticNested.display();
    }
}
