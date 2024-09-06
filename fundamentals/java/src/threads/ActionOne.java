package threads;

public class ActionOne implements Runnable {
    @Override
    public void run() {
        var threadName = Thread.currentThread().getName();
        System.out.println(threadName + " is doing something");
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            System.out.println(e);;
        } finally {
            System.out.println(threadName + " finished doing something");
        }
    }
}
