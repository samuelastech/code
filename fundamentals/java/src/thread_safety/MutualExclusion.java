package thread_safety;

public class MutualExclusion {
    private int count = 0;

    /*
    * The key word 'synchronized' allows the mutual exclusion
    * Only one thread will have access at once.
    * The thread will acquire the 'lock'. When it finishes it,
    * then it will release the lock.
    * */
    public synchronized void increment() {
        count++;
    }

    public void decrement() {
        synchronized (this) {
            count--;
        }
    }

    public int getCount() {
        return count;
    }
}
