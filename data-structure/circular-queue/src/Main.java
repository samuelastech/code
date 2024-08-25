public class Main {
    public static void main(String[] args) {
        CircularQueue<Integer> q = new CircularQueue<Integer>(10);
        q.add(10);
        q.add(21);
        System.out.println(q.isEmpty());

        try {
            q.remove();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
