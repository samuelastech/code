package receivers;

import common.Command;

public class TurnOnLight implements Command {
    private Light light;

    public TurnOnLight(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        this.light.turnOn();
    }
}
