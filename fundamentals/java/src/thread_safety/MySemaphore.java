package thread_safety;

import java.util.concurrent.Semaphore;

public class MySemaphore {
    private final Semaphore semaphore = new Semaphore(3);

    public void useSomething() {
        try {
            semaphore.acquire(); // One slot out of the three
            String threadName = Thread.currentThread().getName();
            System.out.println("Current thread: " + threadName);
            Thread.sleep(1000);
        } catch (Exception e) {
            Thread.currentThread().interrupt();
        } finally {
            semaphore.release(); // Releases the acquired slot
            String threadName = Thread.currentThread().getName();
            System.out.println("Released: " + threadName);
        }
    }
}
