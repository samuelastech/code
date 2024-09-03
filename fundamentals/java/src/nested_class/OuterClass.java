package nested_class;

public class OuterClass {
    private String outerClass = "(parâmetro da classe externa)";

    class InnerNestedClass {
        public void display() {
            System.out.println("Acessando classe interna " + outerClass);
        }
    }

    static class StaticNestedClass {
        public void display() {
            System.out.println("Acessando classe estática interna");
        }
    }
}
