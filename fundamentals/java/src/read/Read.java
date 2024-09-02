package read;

import java.util.Scanner;

public class Read {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        System.out.print("Type down your favorite movie: ");
        String movie = read.nextLine();
        System.out.println("Hm, so " + movie + " is your favorite movie. That's interesting");

        System.out.print("Now, type down your age: ");
        int age = read.nextInt();
        System.out.println("Only " + age + "? You're younger than I thought");
    }
}
