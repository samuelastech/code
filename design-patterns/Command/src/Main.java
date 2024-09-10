import common.Command;
import invokers.RemoteControl;
import receivers.Light;
import receivers.TurnOffLight;
import receivers.TurnOnLight;

public class Main {
    public static void main(String[] args) {
        Light classLight = new Light();

        Command turnOn = new TurnOnLight(classLight);
        Command turnOff = new TurnOffLight(classLight);

        RemoteControl remote = new RemoteControl();

        remote.setCommand(turnOn);
        remote.pressButton();

        remote.setCommand(turnOff);
        remote.pressButton();
    }
}
