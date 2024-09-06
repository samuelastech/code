package threads;

public class Main {
    public static void main(String[] args) {
        var actionOne = new ActionOne();
        var actionTwo = new ActionTwo();
        var actionThree = new ActionThree();

        new Thread(actionOne, "(1) Action one:").start();
        new Thread(actionTwo, "(2) Action two:").start();
        actionThree.start();
    }
}
