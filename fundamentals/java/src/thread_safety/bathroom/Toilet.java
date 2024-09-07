package thread_safety.bathroom;

public class Toilet {
    private boolean isDirt = false;

    public void poop() {
        String name = this.knock();
        synchronized (this) {
            while (isDirt) {
                getOut(name);
            }

            System.out.println(name + " got in and is pooping");
            useToilet(name, 10000);
        }
    }

    public void piss() {
        String name = this.knock();
        synchronized (this) {
            while (isDirt) {
                getOut(name);
            }

            System.out.println(name + " got in and is pissing");
            useToilet(name, 3000);
        }
    }

    public void clean() {
        while (true) {
            String name = this.knock();
            synchronized (this) {
                System.out.println(name + " is going in to clean up the toilet");

                if (!isDirt) {
                    System.out.println(name + " found out the toilet was not dirt");
                    return;
                }

                try {
                    Thread.sleep(13000);
                    isDirt = false;
                    this.notifyAll();
                    System.out.println(name + " finished cleaning up the toilet");
                } catch (InterruptedException e) {
                    System.out.println(name + " slipped and hit their head on the edge of the sink");
                }
            }
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
            isDirt = true;
            System.out.println(name + " is going out of the toilet");
        }
    }

    private void getOut(String name) {
        System.out.println(name + " got out because the toilet is dirt. GROSS!");
        try {
            this.wait();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
