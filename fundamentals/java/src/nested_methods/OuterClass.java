package nested_methods;

public class OuterClass {
    public void regularMethod() {
        class LocalClass {
            public void localMethod() {
                System.out.println("A nested method being called");
            }
        }

        LocalClass l = new LocalClass();
        l.localMethod();
    }

    public void callNested() {
        NestedClass n = new NestedClass();
        n.did();
    }

    private class NestedClass {
        public void did() {
            System.out.println("A nested class");
        }
    }
}
