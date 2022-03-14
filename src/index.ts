import Config from "./components/Config";
import { schedule } from "node-cron";
import HealthChecker from "./actions/HealthChecker";

const config = Config.GetConfigFromFile();

console.log("Running automated health checks");
schedule(config.cronSchedule, () => {
    HealthChecker.CheckApisEndpoints(config);
});