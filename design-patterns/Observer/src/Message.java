import concept.Observer;

public class Message implements Observer {
    @Override
    public void update(String message) {
        System.out.println("Message: " + message);
    }
}
