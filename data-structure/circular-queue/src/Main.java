public class Main {
    public static void main(String[] args) {
        CircularQueue<Integer> q = new CircularQueue<Integer>(5);
        try {
            q.add(10);
            q.add(21);
            q.add(21);
            q.add(21);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
