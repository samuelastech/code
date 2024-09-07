package thread_safety.bathroom;

public class Room {
    public static void main(String[] args) {
        var toilet = new Toilet();

        new Thread(toilet::piss, "John").start();
        new Thread(toilet::poop, "Harry").start();
        new Thread(toilet::piss, "Diogo").start();
        new Thread(toilet::piss, "Neymá").start();
        var cleaner = new Thread(toilet::clean, "Diógenes");
        cleaner.setDaemon(true);
        cleaner.start();
    }
}
