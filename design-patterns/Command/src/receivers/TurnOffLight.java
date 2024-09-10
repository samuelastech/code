package receivers;

import common.Command;

public class TurnOffLight implements Command {
    private Light light;

    public TurnOffLight(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        this.light.turnOff();
    }
}
