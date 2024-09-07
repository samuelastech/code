package thread_safety.bathroom;

public class Toilet {
    public void poop() {
        String name = this.knock();
        synchronized (this) {
            System.out.println(name + " got in and is pooping");
            useToilet(name, 10000);
        }
    }

    public void piss() {
        String name = this.knock();
        synchronized (this) {
            System.out.println(name + " got in and is pissing");
            useToilet(name, 3000);
        }
    }

    private String knock() {
        var name = Thread.currentThread().getName();
        System.out.println(name + " is knocking at the door");
        return name;
    }

    private void useToilet(String name, int millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            System.out.println("Some problem have happened");
        } finally {
            System.out.println(name + " is going out of the toilet");
        }
    }
}
