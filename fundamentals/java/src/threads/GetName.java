package threads;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class GetName {
    public static void main(String[] args) {
        Thread getName = new Thread(() -> {
            try {
                Scanner scanner = new Scanner(new File("src/threads/names.txt"));
                while (scanner.hasNextLine()) {
                    String line = scanner.nextLine();
                    if (line.contains("Samuel")) {
                        System.out.println("The name you were trying to find was found");
                        break;
                    }
                }
                scanner.close();
            } catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
        });

        getName.start();
    }
}
