import Config from "./components/Config";
import { schedule } from "node-cron";
import HealthChecker from "./actions/HealthChecker";

const config = Config.GetConfigFromFile();

console.log("Starting process")
schedule(config.cronSchedule, () => {
    console.log("Running automated health checks");
    HealthChecker.CheckApisEndpoints(config);
});