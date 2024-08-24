import concept.Observer;
import concept.Subject;

import java.util.ArrayList;

public class Notifier implements Subject {
    ArrayList<Observer> observers = new ArrayList<Observer>();
    private int data;

    public void setData(int value) {
        this.data = value;
        this.inform();
    }

    @Override
    public void add(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void remove(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void inform() {
        for (Observer observer : observers) {
            observer.update("Something happened");
        }
    }
}
