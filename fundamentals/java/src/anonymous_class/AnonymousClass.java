package anonymous_class;

import java.sql.SQLOutput;

interface Greeting {
    void sayHello();
}

public class AnonymousClass {
    public static void main(String[] args) {
        /* Anonymous classes are meant to define a one-time implementation */
        var greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Howdy");
            }
        };

        var newThread = new Thread() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + " is executing");
            }
        };

        greeting.sayHello();
        newThread.start();
    }
}
