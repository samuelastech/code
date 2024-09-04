package exceptions;

public class MultiCatch {
    public static void main(String[] args) {
        try {
            String text = null;
            int number = Integer.parseInt("abc");

            // NullPointerException
            System.out.println(text.length());

            // NumberFormatException
            System.out.println(number);

            throw new IllegalArgumentException("Wrong data");
        } catch (NullPointerException | NumberFormatException e) {
            System.out.println("Exception occurred: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("A different exception occurred: " + e.getMessage());
        }
    }
}
