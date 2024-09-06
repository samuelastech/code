package threads;

public class ActionThree extends Thread {
    public ActionThree() {
        super("(3) Action three:");
    }

    @Override
    public void run() {
        var threadName = Thread.currentThread().getName();
        System.out.println(threadName + " is different from the others");
        System.out.println(threadName + " it has two instructions and it is faster than the others");
    }
}
