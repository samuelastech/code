package thread_safety;

public class Main {
    public static void main(String[] args) {
        MutualExclusion m = new MutualExclusion();
        MySemaphore s = new MySemaphore();

        m.increment();
        System.out.println(m.getCount());

        s.useSomething();
    }
}
