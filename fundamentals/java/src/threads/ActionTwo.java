package threads;

public class ActionTwo implements Runnable {
    @Override
    public void run() {
        var threadName = Thread.currentThread().getName();
        System.out.println(threadName + " is starting something in parallel");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);;
        } finally {
            System.out.println(threadName + " whata runner!");
        }
    }
}
