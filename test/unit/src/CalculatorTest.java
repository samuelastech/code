import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    @Test
    public void add() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3), "Should return the sum of two numbers");
    }
}
