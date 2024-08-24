import concept.Observer;

public class User implements Observer {
    @Override
    public void update(String message) {
        System.out.println("User: " + message);
    }
}
