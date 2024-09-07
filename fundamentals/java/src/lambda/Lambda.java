package lambda;

interface Calculator {
    int add(int a, int b);
}

public class Lambda {
    public static void main(String[] args) {
        var lambda = new Lambda();
        System.out.println(lambda.noLambda());
        System.out.println(lambda.withLambda());
    }

    private int noLambda() {
        Calculator calculator = new Calculator() {
            @Override
            public int add(int a, int b) {
                return a + b;
            }
        };

        return calculator.add(10, 50);
    }

    private int withLambda() {
        Calculator calculator = (a, b) -> a + b;
        return calculator.add(30, 80);
    }
}
