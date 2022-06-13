import { CommandType } from "../types/CommandType";
import HealthCheckeCommand from "./HealthCheckCommand";

export default class Commander {
    private static commands: Array<CommandType> = [
        {name: ":hc", command: HealthCheckeCommand.CheckApisEndpoints}
    ]
    
    public static RunCommand() {
        
    }
}