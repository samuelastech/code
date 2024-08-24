public class Main {
    public static void main(String[] args) {
        Notifier n = new Notifier();
        User u = new User();
        Message m = new Message();

        n.add(u);
        n.add(m);

        n.setData(50);
    }
}
